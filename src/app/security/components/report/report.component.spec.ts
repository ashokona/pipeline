import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportComponent } from './report.component';

describe('ReportComponent', () => {
  let component: ReportComponent;
  let fixture: ComponentFixture<ReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/**
 {
    "message": "Security Reports fetched successfully",
    "data": {
        "columnData": [
            {
                "Severity": "Failure",
                "ResourceID": "s-0-sg2f39cf4a-ZQM2X426KF7S | sg-bbebcbde",
                "Message": "Exposes wide port range",
                "Action": "Remove rule containing IP protocol: -1",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "ap-southeast-2",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "s-0-sg14a7ae76-1XTZHFVWGDI0L | sg-beebcbdb",
                "Message": "Exposes wide port range",
                "Action": "Remove rule containing IP protocol: -1",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "ap-southeast-2",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-6 | sg-05459d6b0a8543142",
                "Message": "Exposes wide port range",
                "Action": "Remove rule containing IP protocol: -1",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "eu-west-2",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "Test | sg-0f5e56631b7d6b9fd",
                "Message": "Exposes wide port range",
                "Action": "Remove rule containing IP protocol: -1",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "eu-west-2",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-2 | sg-00e3e64293b11e850",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-2",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-3 | sg-027324dd548944ebc",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-2",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-4 | sg-0de236d1d8e68714d",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-2",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "CentOS 7 -x86_64- - with Updates HVM-1801_01-AutogenByAWSMP- | sg-54f3303f",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-2",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "CloudLens-Test | sg-9bc848f0",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-2",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "CentOS 7 -x86_64- - with Updates HVM-1704-AutogenByAWSMP- | sg-af7adcc7",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-2",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "MyTestSG | sg-009abf71",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "demo_security_group | sg-01587d22722a9f722",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "INMARDEMOSG | sg-0177fdc667d35e321",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-8 | sg-01d53b81491c6b0a0",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-7 | sg-0227ce157cd00cb3e",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-10 | sg-032cf138f77970020",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "ansiblesg-internal | sg-0427b0ecea7ee424e",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-9 | sg-043c315a217393e76",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "CentOS 7 -x86_64- - with Updates HVM-1805_01-AutogenByAWSMP-1 | sg-045c9624ad6a7b9c5",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-13 | sg-052c127ee383ddd54",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-18 | sg-054add03c0e45a04f",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "AWS-OpsWorks-Custom-Server | sg-057e0c7c",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "sftp | sg-05ca7e597bacef79a",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "CentOS 7 -x86_64- - with Updates HVM-1805_01-AutogenByAWSMP- | sg-060122a4b4f38e3b4",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-11 | sg-063d02a4b8744f2a7",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "MLSTACK-WebServerSecurityGroup-1P609V6U4LXB7 | sg-06dfd223da7c98c67",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-3 | sg-0703bc2e417f5eb63",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-6 | sg-0769c20f52155be11",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "terraform-example-instance | sg-076bb6d3fc7c7f9cb",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-1 | sg-07d38141267fd93ac",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "AWS-OpsWorks-Default-Server | sg-087e0c71",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-19 | sg-0928df9a31119e966",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-17 | sg-098811d4a7f5c6fd3",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-5 | sg-09b713a0f21611e89",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-4 | sg-09cd8401117ff1140",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-15 | sg-0ba408c7f7ec0f456",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "CloudNAS | sg-0cff0875",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "webserver_sg | sg-0da13b05a8f73bfb7",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "Amazon EKS-Optimized Amazon Linux AMI-1-11-v20190220-AutogenByAWSMP- | sg-0f6126a587cdd73b1",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "AutoScaling-Security-Group-1 | sg-0f68fd5d7214c7467",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "AWS-OpsWorks-Monitoring-Master-Server | sg-127e0c6b",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "AWS-OpsWorks-Blank-Server | sg-1a7e0c63",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "AWS-OpsWorks-Memcached-Server | sg-1e7e0c67",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "AWS-OpsWorks-Web-Server | sg-217e0c58",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "AWS-OpsWorks-LB-Server | sg-277e0c5e",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "AWS-OpsWorks-Rails-App-Server | sg-317e0c48",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "AWS-OpsWorks-PHP-App-Server | sg-377e0c4e",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "kamma14sg | sg-5e262c29",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "NetflixOSS Asgard-1-3-1 r2-AutogenByAWSMP- | sg-814eb9e4",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "Devopskodra02SG group | sg-c304afbc",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "securityGroups-InternalServerSecurityGroup-Z559GATT0SH4 | sg-db33dfbf",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "opennebula | sg-de6a8db9",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "webServer | sg-e0ce9495",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "AWS-OpsWorks-Java-App-Server | sg-f17e0c88",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "AWS-OpsWorks-AWS-Flow-Ruby-Server | sg-f27e0c8b",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "AWS-OpsWorks-ECS-Cluster | sg-f77e0c8e",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "AWS-OpsWorks-nodejs-App-Server | sg-f87e0c81",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "test1 | sg-cec3daac",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-west-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "cloudnas-sg | sg-e4d7fe81",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-west-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-5 | sg-02dade5a924f6dbc4",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-west-2",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-3 | sg-059edd7aada151fe7",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-west-2",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-2 | sg-07f591e19dce59784",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-west-2",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-1 | sg-0f605bf3e3b7eb8bb",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "us-west-2",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-7 | sg-34d5ba5c",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "ap-northeast-2",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-6 | sg-423b5b2a",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "ap-northeast-2",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-2 | sg-458f502d",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "ap-northeast-2",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-1 | sg-52944b3a",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "ap-northeast-2",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "elbsg | sg-603de608",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "ap-northeast-2",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-5 | sg-77f0751f",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "ap-northeast-2",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-3 | sg-e06fdf88",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "ap-northeast-2",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-2 | sg-b3cce1da",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "ap-south-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-4 | sg-b9f9c2d0",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "ap-south-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-3 | sg-c44b62ad",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "ap-south-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-6 | sg-dfbe15b4",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "ap-south-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-1 | sg-f99bbd90",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "ap-south-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-2 | sg-bcf34fd9",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "ap-southeast-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "s-0-sga2f357c7-INTAH08138RL | sg-86ebcbe3",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "ap-southeast-2",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "s-0-sg0830b46d-1JQW6TBO3YEI1 | sg-baebcbdf",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "ap-southeast-2",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "s-0-sgf6cd2393-14IPDS0AU6PN8 | sg-bcebcbd9",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "ap-southeast-2",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-1 | sg-045fb376c7c09cfef",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "eu-west-2",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "AutoScaling-Security-Group-1 | sg-07ffbb14002a04e73",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "eu-west-2",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-5 | sg-08fc7ea12cd6f63b8",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "eu-west-2",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-7 | sg-0b65be84ea94b75ce",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "eu-west-2",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-3 | sg-0bcc8cd8572281702",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "eu-west-2",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-4 | sg-0dd00a119926fb59b",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "eu-west-2",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "launch-wizard-2 | sg-0df8c259a13344a86",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "eu-west-2",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "packer_5c841a69-c2c9-e844-934a-f1b1ce741f67 | sg-0150bc1a5672bf995",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "eu-west-3",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "DockerMaster | sg-0b003d649e76f6b4c",
                "Message": "SSH Port is open to entire world",
                "Action": "Restrict SSH port",
                "AccountID": 411045957183,
                "ServiceName": "ec2",
                "Region": "sa-east-1",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "AutoAdminProd",
                "Message": "User doesn't belong to any group",
                "Action": "User groups for granting access to the users",
                "AccountID": 411045957183,
                "ServiceName": "iam",
                "Region": "global",
                "Benchmark": [
                    "All",
                    "CIS"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "thisr02",
                "Message": "User doesn't belong to any group",
                "Action": "User groups for granting access to the users",
                "AccountID": 411045957183,
                "ServiceName": "iam",
                "Region": "global",
                "Benchmark": [
                    "All",
                    "CIS"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "uday.bikkasani@broadcom.com",
                "Message": "User doesn't belong to any group",
                "Action": "User groups for granting access to the users",
                "AccountID": 411045957183,
                "ServiceName": "iam",
                "Region": "global",
                "Benchmark": [
                    "All",
                    "CIS"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "Expire Passwords",
                "Message": "To enforce regular change of passwords,\n            it should be expired after certian time",
                "Action": "Enable this",
                "AccountID": 411045957183,
                "ServiceName": "iam",
                "Region": "global",
                "Benchmark": [
                    "All",
                    "CIS"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "Max Password Age",
                "Message": "Password should be change at lease once in 90 days",
                "Action": "Set this to 90",
                "AccountID": 411045957183,
                "ServiceName": "iam",
                "Region": "global",
                "Benchmark": [
                    "All",
                    "CIS"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "Password Reuse Prevention",
                "Message": "New password shouldn't be\n            same as at least last 3 used passwords",
                "Action": "Set this to 3",
                "AccountID": 411045957183,
                "ServiceName": "iam",
                "Region": "global",
                "Benchmark": [
                    "All",
                    "CIS"
                ]
            },
            {
                "Severity": "Warning",
                "ResourceID": "Hard Expiry",
                "Message": "User should contact the admin to reset the expired password",
                "Action": "Set this to true. Use caution here if\n            there is only admin for your account then don't set this",
                "AccountID": 411045957183,
                "ServiceName": "iam",
                "Region": "global",
                "Benchmark": [
                    "All",
                    "CIS"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "<root_account>",
                "Message": "Root user access keys are active",
                "Action": "Delete the root user access keys instead use IAM\n            user access keys for programmatic access",
                "AccountID": 411045957183,
                "ServiceName": "iam",
                "Region": "global",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "CloudGuard",
                "Message": "Accounts 913004800821 does not have ExternalId",
                "Action": "Add an ExternalId",
                "AccountID": 411045957183,
                "ServiceName": "iam",
                "Region": "global",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "cloudguard-role",
                "Message": "Accounts 913004800821 does not have ExternalId",
                "Action": "Add an ExternalId",
                "AccountID": 411045957183,
                "ServiceName": "iam",
                "Region": "global",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "CloudReportsROA",
                "Message": "Accounts 147967597763 does not have ExternalId",
                "Action": "Add an ExternalId",
                "AccountID": 411045957183,
                "ServiceName": "iam",
                "Region": "global",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "Developer",
                "Message": "Accounts 913004800821 does not have ExternalId",
                "Action": "Add an ExternalId",
                "AccountID": 411045957183,
                "ServiceName": "iam",
                "Region": "global",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "MyAppCrossAccountAccess",
                "Message": "Accounts 632484124477 does not have ExternalId",
                "Action": "Add an ExternalId",
                "AccountID": 411045957183,
                "ServiceName": "iam",
                "Region": "global",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "sbcopy",
                "Message": "Accounts 580050408532 does not have ExternalId",
                "Action": "Add an ExternalId",
                "AccountID": 411045957183,
                "ServiceName": "iam",
                "Region": "global",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "thisr02",
                "Message": "User access key 1 is unused",
                "Action": "Delete unused user access key 1",
                "AccountID": 411045957183,
                "ServiceName": "iam",
                "Region": "global",
                "Benchmark": [
                    "All",
                    "CIS"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "arun.hubballi@broadcom.com",
                "Message": "User account is not MFA enabled",
                "Action": "Enable MFA for the user",
                "AccountID": 411045957183,
                "ServiceName": "iam",
                "Region": "global",
                "Benchmark": [
                    "All",
                    "CIS"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "AutoAdminProd",
                "Message": "User account is not MFA enabled",
                "Action": "Enable MFA for the user",
                "AccountID": 411045957183,
                "ServiceName": "iam",
                "Region": "global",
                "Benchmark": [
                    "All",
                    "CIS"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "thisr02",
                "Message": "User account is not MFA enabled",
                "Action": "Enable MFA for the user",
                "AccountID": 411045957183,
                "ServiceName": "iam",
                "Region": "global",
                "Benchmark": [
                    "All",
                    "CIS"
                ]
            },
            {
                "Severity": "Failure",
                "ResourceID": "uday.bikkasani@broadcom.com",
                "Message": "User account is not MFA enabled",
                "Action": "Enable MFA for the user",
                "AccountID": 411045957183,
                "ServiceName": "iam",
                "Region": "global",
                "Benchmark": [
                    "All",
                    "CIS"
                ]
            },
            {
                "Severity": "Warning",
                "ResourceID": "aws-athena-query-results-370569087721-us-east-1",
                "Message": "All users have\n                read permissions access on the bucket",
                "Action": "Disable open access to any user",
                "AccountID": 411045957183,
                "ServiceName": "s3",
                "Region": "global",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Warning",
                "ResourceID": "cloudascent.io",
                "Message": "All users have\n                read access on the bucket",
                "Action": "Disable open access to any user",
                "AccountID": 411045957183,
                "ServiceName": "s3",
                "Region": "global",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Warning",
                "ResourceID": "copsexpress-dev.com",
                "Message": "All users have\n                full access on the bucket",
                "Action": "Disable open access to any user",
                "AccountID": 411045957183,
                "ServiceName": "s3",
                "Region": "global",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Warning",
                "ResourceID": "serverless-website-s3bucket-g965qxiroz41",
                "Message": "All users have\n                read access on the bucket",
                "Action": "Disable open access to any user",
                "AccountID": 411045957183,
                "ServiceName": "s3",
                "Region": "global",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Warning",
                "ResourceID": "sourcesaira06",
                "Message": "All users have\n                read access on the bucket",
                "Action": "Disable open access to any user",
                "AccountID": 411045957183,
                "ServiceName": "s3",
                "Region": "global",
                "Benchmark": [
                    "All"
                ]
            },
            {
                "Severity": "Warning",
                "ResourceID": "www.cloudascent.io",
                "Message": "All users have\n                read access on the bucket",
                "Action": "Disable open access to any user",
                "AccountID": 411045957183,
                "ServiceName": "s3",
                "Region": "global",
                "Benchmark": [
                    "All"
                ]
            }
        ],
        "finalDataSet": [
            {
                "all": {
                    "All": [
                        {
                            "ServiceName": "all",
                            "AccountID": 411045957183,
                            "High": 160,
                            "Medium": 7,
                            "Low": 44
                        },
                        {
                            "ServiceName": "all",
                            "AccountID": 482163455905,
                            "High": 15,
                            "Medium": 0,
                            "Low": 3
                        }
                    ],
                    "CIS": [
                        {
                            "ServiceName": "all",
                            "AccountID": 411045957183,
                            "High": 160,
                            "Medium": 7,
                            "Low": 44
                        },
                        {
                            "ServiceName": "all",
                            "AccountID": 482163455905,
                            "High": 15,
                            "Medium": 0,
                            "Low": 3
                        }
                    ]
                },
                "ec2": {
                    "All": [
                        {
                            "ServiceName": "ec2",
                            "AccountID": 411045957183,
                            "High": 142,
                            "Medium": 0,
                            "Low": 44
                        },
                        {
                            "ServiceName": "ec2",
                            "AccountID": 482163455905,
                            "High": 0,
                            "Medium": 0,
                            "Low": 3
                        }
                    ],
                    "CIS": [
                        {
                            "ServiceName": "ec2",
                            "AccountID": 411045957183,
                            "High": 142,
                            "Medium": 0,
                            "Low": 44
                        },
                        {
                            "ServiceName": "ec2",
                            "AccountID": 482163455905,
                            "High": 0,
                            "Medium": 0,
                            "Low": 3
                        }
                    ]
                },
                "iam": {
                    "All": [
                        {
                            "ServiceName": "iam",
                            "AccountID": 411045957183,
                            "High": 18,
                            "Medium": 1,
                            "Low": 0
                        },
                        {
                            "ServiceName": "iam",
                            "AccountID": 482163455905,
                            "High": 15,
                            "Medium": 0,
                            "Low": 0
                        }
                    ],
                    "CIS": [
                        {
                            "ServiceName": "iam",
                            "AccountID": 411045957183,
                            "High": 18,
                            "Medium": 1,
                            "Low": 0
                        },
                        {
                            "ServiceName": "iam",
                            "AccountID": 482163455905,
                            "High": 15,
                            "Medium": 0,
                            "Low": 0
                        }
                    ]
                },
                "s3": {
                    "All": [
                        {
                            "ServiceName": "s3",
                            "AccountID": 411045957183,
                            "High": 0,
                            "Medium": 6,
                            "Low": 0
                        },
                        {
                            "ServiceName": "s3",
                            "AccountID": 482163455905,
                            "High": 0,
                            "Medium": 0,
                            "Low": 0
                        }
                    ],
                    "CIS": [
                        {
                            "ServiceName": "s3",
                            "AccountID": 411045957183,
                            "High": 0,
                            "Medium": 6,
                            "Low": 0
                        },
                        {
                            "ServiceName": "s3",
                            "AccountID": 482163455905,
                            "High": 0,
                            "Medium": 0,
                            "Low": 0
                        }
                    ]
                }
            }
        ]
    }
}
 */