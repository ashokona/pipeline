import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, FormGroupDirective, NgForm, AbstractControl  } from '@angular/forms';
import { AwsService } from 'src/app/provision/services/aws.service';
import { ErrorStateMatcher, MatInputModule } from '@angular/material';
import AWSRegions from '../../../../shared/data/aws-regions';
import { ComplianceDashboardService } from '../../../services/complianceDashboard.service';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'cops-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  isLinear = true;
  isDisabled = true;
  serviceFormGroup: FormGroup;
  configurationFormGroup: FormGroup;
  genericConfigurationFormGroup: FormGroup;
  serviceProviderFormGroup: FormGroup;
  configFormGroup: FormGroup;
  selectedDropdown: string[] =['EC2','RDS'];
  defaultBackupOption: string[] = ['Daily-35day-Retention'];
  defaultBackupPlanName: string[] = ['Cops-Default-Policy'];
  backupFreq: string[] =['Hourly','Daily','Weekly','Monthly','Yearly'];
  defaultBackupAccountOptions: string[] = ['All'];
  defaultTagKey: string;
  defaultTagValue: string;
  selectTemplate: string[] = ['Daily-Monthly-1yr-Retention', 'Daily-Weekly-Monthly-5yr-Retention', 'Daily-Weekly-Monthly-7yr-Retention']
  backupPlanName: string;
  backupRulesOptions: string[] = ['Please select template first']
  awsRegions: string[] = AWSRegions;
  isLoading: boolean = false;

  tags_name: FormArray;

  constructor(
    private dashboard: ComplianceDashboardService,
    private _formBuilder: FormBuilder,
    private awsService : AwsService,
    private router: Router
    ) {
   }

   createItem(): FormGroup {
    return this._formBuilder.group({
      name: '',
      value: ''
    });
  }

  ngOnInit() {
    this.getAccounts();
    this.serviceFormGroup = this._formBuilder.group({
      serviceName: ['', Validators.required]
    });
    this.configurationFormGroup = this._formBuilder.group({
      defaultBackupAccountOptions: ['', Validators.required],
      defaultBackupOption: ['', Validators.required],
      defaultBackupPlanName: ['', Validators.required],
      awsRegions: ['', Validators.required],
      backupPlanName: ['', Validators.required],
      selectTemplate: ['', Validators.required],
      backupRulesOptions: ['', Validators.required],
      tags_name: this._formBuilder.array([this.createItem()]),
      defaultTagKey: new FormControl({value: 'cops_default', disabled: true}, Validators.required),
      defaultTagValue: new FormControl({value: 'yes', disabled: true}, Validators.required)
    });
    this.configFormGroup = this._formBuilder.group({
      selectedDropdown: ['', Validators.required],
      items: ['', Validators.required],
      backupFreq: ['', Validators.required],
      days: ['',[Validators.required, Validators.min(0), Validators.max(12)]]
    });
  }
  daysValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value !== undefined && (isNaN(control.value) || control.value < 1 || control.value > 30)) {
        return { 'daysRange': true };
    }
    return null;
  }

  onBackupSubmit() {
    this.isLoading = true;
    let TagKey = this.configurationFormGroup.get('defaultTagKey').value;
    let TagValue = this.configurationFormGroup.get('defaultTagValue').value;
    let selectedTemplate = this.configurationFormGroup.value.selectTemplate;
    let customPlanName = this.configurationFormGroup.value.backupPlanName;
    let data = {
      accountId: this.configurationFormGroup.value.defaultBackupAccountOptions,
      planTemplate : {
        templateName: this.configurationFormGroup.value.defaultBackupOption,
        backupRule: this.configurationFormGroup.value.backupRulesOptions,
      },
      planName: this.configurationFormGroup.value.defaultBackupPlanName,
      region: this.configurationFormGroup.value.awsRegions,
      tags: {
        assignResource: this.configurationFormGroup.value.tags_name
      }
    }
    if(selectedTemplate) {
      data.planTemplate.templateName = selectedTemplate;
    }
    if(customPlanName) {
      data.planName = customPlanName;
    }
    if(!data.tags.assignResource[0].name) {
      delete data.tags.assignResource;
    }
    if (data.accountId === 'All') {
      this.defaultBackupAccountOptions.forEach(element => {
        if(element !== "All"){
          let params = {
            accountId: element
          }
          this.createBackupRole(params);
          data.accountId = element
          this.createBackupPlan(data);
        }
      });
    }
    else {
      let params = {
        accountId: data.accountId
      }
      this.createBackupRole(params);
      this.createBackupPlan(data);
    }
  }

  createBackupPlan(data) {
    this.dashboard.createBackupPlan(data).subscribe(res=> {
      this.onTabChanged();
    })
  }

  getAccounts() {
    this.dashboard.getAccounts().subscribe(res=>{
      let accounts = res.data;
      let arr = [];
      accounts.forEach(element => {
        this.defaultBackupAccountOptions.push(element.AccountId)
      });
    })
  }

  createBackupRole(params) {
    this.dashboard.createBackupIamRole(params).subscribe(res => {
      console.log('create backup iam role res = ', res);
    })
  }

  addItem(): void {
    this.tags_name = this.configurationFormGroup.get('tags_name') as FormArray;
    this.tags_name.push(this.createItem());
  }

  removeItem(): void {
    this.tags_name = this.configurationFormGroup.get('tags_name') as FormArray;
    if(this.tags_name.length > 1)
      this.tags_name.removeAt(-1);
  }

  onTabChanged() {
    this.isLoading = false;
    this.router.navigate(['/compliance/Dashboard']);
  }

  onServiceSelect() {
    console.log('service selected');
  }

  onBackupTemplateSelect(template) {
    let arr = template.split("-");
    arr.splice(arr.length - 2, 2);
    this.backupRulesOptions = arr;
  }
}
