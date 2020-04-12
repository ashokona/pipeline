import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl  } from '@angular/forms';
import 'hammerjs';
import { AwsService } from '../../services/aws.service';
import AWSRegions from '../../../shared/data/aws-regions';


@Component({
  selector: 'cops-docker',
  templateUrl: './docker.component.html',
  styleUrls: ['./docker.component.scss']
})
export class DockerComponent implements OnInit {
  isLinear = true;
  selectinstance :['instance1', 'instance2', 'instance3'];
  ami: string[] = ['AMI-One', 'AWS-Two', 'AWS-Three'];
  key_pair: string[] = ['Key-One', 'Key-Two', 'Key-Three'];

  regionFormGroup: FormGroup;
  actionSelectFormGroup: FormGroup;
  clusterConfigurationFormGroup: FormGroup;
  awsRegions = AWSRegions;
  selectedRegion = AWSRegions[0];
  toasterOptions = {
    timeOut: 5000
  };
  butttonContent = 'Submit';

  regions: any[] = [];
  sunetId: any[] = [];
  vpc: any[] = [];

  securityGroup: any[] = [
    { value: 'none', viewValue: 'none' },
  ];

  releaseTypes: any[] = [
    { value: 'none', viewValue: 'None' },
    { value: 'iaas', viewValue: 'Iaas' },
    { value: 'canary', viewValue: 'Canary' },
    { value: 'blue_green', viewValue: 'Blue-Green' },
    { value: 'abtestting', viewValue: 'A/B Testing' },
  ];

  instanceTypes: any[] = [
    { value: 't2.micro', viewValue: 't2 micro' },
    { value: '', viewValue: '' },
    { value: '', viewValue: '' },
    { value: '', viewValue: '' },
    { value: '', viewValue: '' }
  ];

  environment: any[] = [
    { value: 'prod', viewValue: 'Production' },
    { value: 'staging', viewValue: 'Staging' },
    { value: 'dev', viewValue: 'Development' },
    { value: 'poc', viewValue: 'POC' }
  ];

  constructor(
    private _formBuilder: FormBuilder,
    private awsService : AwsService
    ) { }

  tags_name: FormArray;

  createItem(): FormGroup {
    return this._formBuilder.group({
      name: '',
      value: ''
    });
  }

  ngOnInit() {
    this.awsRegions.map((each)=>{
      this.regions.push({ value: each, viewValue: each })
    }); 
    this.initForm();
    //this.initComputeData();
  }
  
  initForm() {
    this.regionFormGroup = this._formBuilder.group({
      selectedRegion: ['',Validators.required],
    });

    this.actionSelectFormGroup = this._formBuilder.group({
      select: ['',Validators.required],
    });

    this.clusterConfigurationFormGroup = this._formBuilder.group({
      manager_instanceType: ['',Validators.required],
      noOfManagers: ['',Validators.required],
      ami:['',Validators.required],
      volumes:['',Validators.required],
      key_pair:['',Validators.required],
      worker_instanceType: ['',Validators.required],
      noOfWorkers: ['',Validators.required],
      tags_name: this._formBuilder.array([ this.createItem() ]),
    });
  }
  addItem(): void {
    this.tags_name = this.clusterConfigurationFormGroup.get('tags_name') as FormArray;
    this.tags_name.push(this.createItem());
  }

  onRegionSelect() {
    console.log("Region Selected");
  }

  actionSelect() {
    console.log("Action Selected")
  }


  onRest() {
    this.clusterConfigurationFormGroup.reset();
  }

  myStack: any[] = [];

  demoCtrl($scope) {
    $scope.myStack = this.myStack;
    }

  onSubmit() {
    //console.log(this.genericConfigurationFormGroup.value);
    this.myStack.push(this.clusterConfigurationFormGroup.value);
    console.log(this.myStack);
  }


}
