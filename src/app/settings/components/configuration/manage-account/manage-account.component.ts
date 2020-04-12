import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { template } from './template';
import { readonlyTemplate } from './readonlyTemplate';
import { SettingsService } from '../../../services/settings.service';
import { UserService } from '../../../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cops-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.scss']
})
export class ManageAccountComponent implements OnInit, OnChanges {
  @Input() account: any;
  @Input() accounts: any[];
  @Input() groups;
  @Input('configure')
  set setConfiguration(value) {
    if (value) {
      this.showStackCreationSteps = value;
      if (this.account) {
        this.generateIntegrationTempalte(this.account);
      }
    }
  }
  @Output() closeFlyout: EventEmitter<any> = new EventEmitter<any>();

  isLoading: Boolean = false;
  accountsForm: FormGroup;
  showStackCreationSteps: Boolean = false;
  currentUser: any;
  isEdit: Boolean = false;
  optimizationTempalteUrl: any;
  access: string = 'optimization';

  providers = [
    { name: 'AWS', value: 'aws' },
    { name: 'Azure', value: 'azure' },
    { name: 'Google Cloud', value: 'gcp' }
  ];

  
  constructor(private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    private settingsSerivce: SettingsService,
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initaliseAccountForm();
    this.currentUser = this.userService.currentUser.value;
  }

  ngOnChanges() {
    if (this.account && this.showStackCreationSteps) {
      this.generateIntegrationTempalte(this.account);
    }
  }

  initaliseAccountForm() {
    if (this.account) {
      this.isEdit = true;
      this.accountsForm = this.formBuilder.group({
        provider: new FormControl({ value: this.account.provider, disabled: true }, Validators.required),
        accessType: new FormControl({ value: this.account.accessType, disabled: false }, Validators.required),
        accountName: new FormControl({ value: this.account.accountName, disabled: true }, Validators.required),
        AccountId: new FormControl({ value: this.account.AccountId, disabled: true }, Validators.required),
        groups: new FormControl(this.account.groups, Validators.required)
      });
    } else {
      this.isEdit = false;
      const defaultGroup = this.groups.filter(group => group.groupName === 'default').map(group => group._id);
      this.accountsForm = this.formBuilder.group({
        provider: new FormControl('aws', Validators.required),
        accessType: new FormControl(this.access, Validators.required),
        accountName: new FormControl('', Validators.required),
        AccountId: new FormControl('', [Validators.required, Validators.min(100000000000), Validators.max(999999999999)]),
        groups: new FormControl(defaultGroup, Validators.required)
      });
    }
  }

  onAddAccount() {
    if (!this.isEdit) {
      this.addAccount();
    } else {
      this.editAccount();
    }
  
  }

  addAccount() {
    const accountDetails = this.accountsForm.value;
    this.access = accountDetails.accessType;
    const isValid = this.validateAccountNumber(accountDetails.AccountId);
    if (!isValid) {
      return false;
    }
    this.isLoading = true;
    this.settingsSerivce.addAccount(accountDetails).subscribe(
      res => {
        this.isLoading = false;
        this.showStackCreationSteps = true;
        this.account = res.data;
        this.account.createdBy = this.currentUser.email;
        this.generateIntegrationTempalte(this.account);
        this.account.groupNames = this.groups.filter(group => this.account.groups.indexOf(group._id) > -1).map(group => group.groupName);
      },
      err => {
        this.isLoading = false;
      }
    )
  }

  generateIntegrationTempalte(account) {
    var cloudFormationTemplate;
    if(this.access == 'readonly'){
      cloudFormationTemplate = readonlyTemplate;
    }
    else{
      cloudFormationTemplate = template;
    }
    cloudFormationTemplate['Parameters']['ExternalID']['Default'] = account.externalId;
    const blob = new Blob([JSON.stringify(cloudFormationTemplate)], { type: 'application/json' });
    this.optimizationTempalteUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
      }

  editAccount() {
    const fromData = this.accountsForm.value;
    if ((fromData.groups === this.account.groups && fromData.accountName === this.account.accountName) || fromData.groups.length === 0) {
      return false;
    }
    this.isLoading = true;
    const data = {
      removedGroups: this.account.groups.filter(x => !this.accountsForm.value.groups.includes(x)),
      accountName: fromData.accountName,
      groups: fromData.groups,
      _id: this.account._id
    };
    this.settingsSerivce.updateAccount(data).subscribe(
      res => {
        this.isLoading = false;
        this.toastr.success(res.message, '');
        this.account.groups = data.groups;
        this.account.groupNames = this.groups.filter(group => this.account.groups.indexOf(group._id) > -1).map(group => group.groupName);
        this.closeFlyout.emit(this.account);
      },
      err => {
        this.isLoading = false;
        this.toastr.error(err.error.message, '');
      }
    );
  }

  onConfigureAccount() {
    this.isLoading = true;
    const account = {
      account_id: this.account.AccountId
    };
    this.settingsSerivce.pollResources(account).subscribe(
      res => {
        this.account.stackVerified = true;
        this.isLoading = false;
        this.toastr.success('Account configured successfully.', '');
        this.configureUser();
        this.closeFlyout.emit(this.account);
      },
      err => {
        this.isLoading = false;
        this.toastr.error('Account configuration failed.', '');
        this.closeFlyout.emit(this.account);
      }
    );
  }

  onCloseStackCreation() {
    if (this.account) {
      this.closeFlyout.emit(this.account);
    } else {
      this.closeFlyout.emit();
    }
  }

  configureUser() {
    if (!this.currentUser.isConfigured) {
      this.userService.configure().subscribe(
        res => {
          this.currentUser.isConfigured = true;
          this.userService.currentUser.next(this.currentUser);
          this.router.navigate(['/dashboard']);
          this.closeFlyout.emit(this.account);
        },
        err => {
          this.toastr.error('Something went wrong contact admin.', '');
        }
      );
    }
  }

  validateAccountNumber(AccountId) {
    const accNumber = this.accounts ? this.accounts.some(account => account.AccountId === AccountId) : false;
    if (accNumber) {
      this.accountsForm.controls['AccountId'].setErrors({ 'isExisting': true });
      return false;
    } else {
      this.accountsForm.controls['AccountId'].setErrors(null);
      return true;
    }
  }
}
