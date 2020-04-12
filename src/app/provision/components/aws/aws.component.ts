import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray  } from '@angular/forms';
import 'hammerjs';
import { AwsService } from '../../services/aws.service';
import AWSRegions from '../../../shared/data/aws-regions';


@Component({
  selector: 'cops-aws',
  templateUrl: './aws.component.html',
  styleUrls: ['./aws.component.scss']
})


export class AwsComponent implements OnInit {
  genericConfigurationFormGroup: FormGroup;
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
  ]
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
  ]

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
    this.initComputeData();
  }
  
  initForm() {
    this.genericConfigurationFormGroup = this._formBuilder.group({
      region: [this.selectedRegion, Validators.required],
      vpc_id: ['', Validators.required],
      sunet_id: ['', Validators.required],
      instance_type: ['t2.micro', Validators.required],
      ami: ['ami-0ff8a91507f77f867  # Amazon Linux AMI 2018.03.0', Validators.required],
      security_group:['none', Validators.required],
      key_pair:['', Validators.required],
      iam_role:['', Validators.required],
      environment:['', Validators.required],
      tags_name: this._formBuilder.array([ this.createItem() ]),
      elb:['', Validators.required],
       // tags_Value:['', Validators.required],
      // release_type: ['none', Validators.required],
      // app_name: ['My-Demo'],
      // git_repo: ['https://github.com/SatishNaidi/my-demo.git'],
      // load_balancer_weight: [''],
      // private_ip_cidr: ['0.0.0.0/0', Validators.required],
      // private_sunet_id: ['subnet-4c102138', Validators.required],
      // instance_count: [1, Validators.required],
    });
  }
  addItem(): void {
    this.tags_name = this.genericConfigurationFormGroup.get('tags_name') as FormArray;
    this.tags_name.push(this.createItem());
  }

  onRegionChange() {
    this.sunetId = [];
    this.vpc = [];
    this.initComputeData();

  }

  initComputeData() {
    
    const params = {
      Region: this.selectedRegion
    }
    this.awsService.getCompute(params).subscribe(
      res => {
        var response = res.data;
        response.Subnets.map((each) => {
          this.sunetId.push({ value: each.SubnetId, viewValue: each.SubnetId })
        });       
        response.Vpcs.map((each)=>{
          this.vpc.push({ value: each.VpcId, viewValue: each.VpcId })
        });
      },
      err => {
        console.log(err);
      }
    )
  }

  onRest() {
    this.genericConfigurationFormGroup.reset();
  }

  myStack: any[] = [];

  demoCtrl($scope) {
    $scope.myStack = this.myStack;
    }

  onSubmit() {
    //console.log(this.genericConfigurationFormGroup.value);
    this.myStack.push(this.genericConfigurationFormGroup.value);
    console.log(this.myStack);
  }


}
