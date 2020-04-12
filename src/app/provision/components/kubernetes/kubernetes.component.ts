import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'hammerjs';

@Component({
  selector: 'cops-kubernetes',
  templateUrl: './kubernetes.component.html',
  styleUrls: ['./kubernetes.component.scss']
})


export class KubernetesComponent implements OnInit {
  genericConfigurationFormGroup: FormGroup;

  regions: any[] = [
    { value: 'us-east-1', viewValue: 'us-east-1' },
    { value: 'us-west-1', viewValue: 'us-west-1' },
    { value: 'us-east-2', viewValue: 'us-east-2' },
    { value: 'us-west-2', viewValue: 'us-west-2' }
  ];

  sunetId: any[] = [
    { value: 'subnet-4c102138', viewValue: 'subnet-4c102138' },
    { value: '', viewValue: '' },
    { value: '', viewValue: '' },
    { value: '', viewValue: '' }
  ];

  securityGroup: any[] = [
    { value: 'none', viewValue: 'none' },
    { value: '', viewValue: '' },
    { value: '', viewValue: '' },
    { value: '', viewValue: '' }
  ]
  releaseTypes: any[] = [
    { value: 'none', viewValue: 'None' },
    { value: 'iaas', viewValue: 'Iaas' },
    { value: 'canary', viewValue: 'Canary' },
    { value: 'blue_green', viewValue: 'Blue-Green' },
    { value: 'abtestting', viewValue: 'A/B Testing' },
  ]

  instanceTypes: any[] = [
    { value: 't2.micro', viewValue: 't2 micro' },
    { value: '', viewValue: '' },
    { value: '', viewValue: '' },
    { value: '', viewValue: '' },
    { value: '', viewValue: '' }
  ]

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.genericConfigurationFormGroup = this._formBuilder.group({
      region: ['us-east-1', Validators.required],
      vpc_id: ['vpc-f83d2f9a', Validators.required],
      sunet_id: ['subnet-4c102138', Validators.required],
      instance_type: ['t2.micro', Validators.required],
      // private_ip_cidr: ['0.0.0.0/0', Validators.required],
      // private_sunet_id: ['subnet-4c102138', Validators.required],
      // instance_count: [1, Validators.required],
      ami: ['ami-0ff8a91507f77f867  # Amazon Linux AMI 2018.03.0', Validators.required],
      // release_type: ['none', Validators.required],
      // app_name: ['My-Demo'],
      // git_repo: ['https://github.com/SatishNaidi/my-demo.git'],
      // load_balancer_weight: [''],
      security_group:['none', Validators.required],
      key_pair:['', Validators.required],
      iam_role:['', Validators.required],
      environment:['', Validators.required],
      tags_name:['', Validators.required],
      tags_Value:['', Validators.required],
      elb:['', Validators.required]
    });
  }
  

  onRest() {
    this.genericConfigurationFormGroup.reset();
  }

  myStack: any[] = [];

  demoCtrl($scope) {
    $scope.myStack = this.myStack;
    }

  onSubmit() {
    console.log(this.genericConfigurationFormGroup.value);
    this.myStack.push(this.genericConfigurationFormGroup.value);
    console.log(this.myStack);
  }

  MainCtrl($scope, $http) {
    $scope.tags = [
      { id: 1, name: 'Tag1' },
      { id: 2, name: 'Tag2' },
      { id: 3, name: 'Tag3' }
    ];
  };

  tagsInputAttr($compile){
    return {
      restrict: 'A',
      require: '?ngModel',
      scope:{
        ngModel: '='
      },
      template: '<tags-input ng-model="ngModel"></tags-input>'
    };
  }

}
