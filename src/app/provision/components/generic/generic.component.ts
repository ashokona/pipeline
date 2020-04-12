import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cops-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.scss']
})
export class GenericComponent implements OnInit {
  isLinear = true;
  serviceFormGroup: FormGroup;
  configurationFormGroup: FormGroup;
  genericConfigurationFormGroup: FormGroup;
  serviceProviderFormGroup: FormGroup;
  serviceProvider: string;

  regions: any[] = [
    {value: 'us-east-1', viewValue: 'us-east-1'},
    {value: 'us-west-1', viewValue: 'us-west-1'},
    {value: 'us-east-2', viewValue: 'us-east-2'},
    {value: 'us-west-2', viewValue: 'us-west-2'}
  ];

  releaseTypes: any[] = [
    {value: 'none', viewValue: 'None'},
    {value: 'iaas', viewValue: 'Iaas'},
    {value: 'canary', viewValue: 'Canary'},
    {value: 'blue_green', viewValue: 'Blue-Green'},
    {value: 'abtestting', viewValue: 'A/B Testing'},
  ];

  instanceTypes: any[] = [
    {value: 't2.micro', viewValue: 't2 micro'},
    {value: '', viewValue: ''},
    {value: '', viewValue: ''},
    {value: '', viewValue: ''},
    {value: '', viewValue: ''}
  ];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.genericConfigurationFormGroup = this._formBuilder.group({
    //   region: ['us-east-1', Validators.required],
    //   instance_type: ['t2.micro', Validators.required],
    //   vpc_id: ['vpc-f83d2f9a', Validators.required],
    //   public_sunet_id: ['subnet-4c102138', Validators.required],
    //   private_ip_cidr: ['0.0.0.0/0', Validators.required],
    //   private_sunet_id: ['subnet-4c102138', Validators.required],
    //   instance_count: [1, Validators.required],
    //   ami: ['ami-0ff8a91507f77f867  # Amazon Linux AMI 2018.03.0', Validators.required],
    //   release_type: ['none', Validators.required ],
    //   app_name: ['My-Demo' ],
    //   git_repo: ['https://github.com/SatishNaidi/my-demo.git'],
    //   load_balancer_weight: [''],
    // });
    this.serviceFormGroup = this._formBuilder.group({
      serviceName: ['', Validators.required]
    });
    this.configurationFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      environment: ['', Validators.required],
      seviceType: ['', Validators.required],
      cpuCores: ['', Validators.required],
      memory: ['', Validators.required],
      rootVolumne: ['', Validators.required],
      os: ['', Validators.required],
    });
    this.serviceProviderFormGroup = this._formBuilder.group({
      region: ['', Validators.required],
      AccountId: ['', Validators.required],
      vpc: ['', Validators.required],
      subnetId: ['', Validators.required],
      securityGroup: ['', Validators.required],
      deploymentStrategy: ['', Validators.required]
    });
  }

  onServiceSelect() {
    console.log(this.serviceFormGroup.value.serviceName);
  }
  onServiceProvider(value) {
    this.serviceProvider = value;
  }

  onRest() {
    this.genericConfigurationFormGroup.reset();
  }
  onSubmit() {
    console.log(this.genericConfigurationFormGroup.value);
  }
}
