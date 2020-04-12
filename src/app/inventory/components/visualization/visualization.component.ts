import { Component, OnInit, Inject, EventEmitter, Output, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import AWSRegions from '../../../shared/data/aws-regions';
import { ComputeService } from '../../services/compute.service';
import { DatabaseService } from '../../services/database.service';
import { Observable } from 'rxjs';
import { mergeMap, map, startWith } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'cops-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.scss']
})
export class VisualizationComponent implements OnInit {
  @ViewChild('d3GroupClusteringContainer', null) private d3GroupClusteringContainer: ElementRef;
  @ViewChild('d3GroupedForcedDirectedContainer', null) private d3GroupedForcedDirectedContainer: ElementRef;
  colors = ["#2777B4", '#BC85F9', '#60DBC6', '#CF6679', "#AEC7E8", "#F17E3A", "#49A02D", "#98DF8A", "#D6322D", "#F29795", "#9467BD", "#C5B0D5", "#41998D", "#F3CE67", "#F7BB77"];
  awsRegions = AWSRegions;
  selectedRegion: string;
  visualizationData: any;
  isLoading: Boolean = false;
  selectedVpc: any;
  selectedSubnets: any[];
  selectedResource: any;
  instances;
  vpcData;
  vpcDataFiltered;
  computeData;
  databaseData;
  keyValuePairs;

  applicationView = false;
  keyControl = new FormControl();
  valueControl = new FormControl();
  tagKeys;
  filteredTagKeys: Observable<string[]>;
  tagValues;
  filteredTagValues: Observable<string[]>;
  selectedKey;
  selectedValue;
  groupedForcedStabilized: boolean = false;
  // options: string[] = ['One', 'Two', 'Three'];
  @Output() regionSelected: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();
  displayKeys = {
    Subnets: ['AvailabilityZone', 'CidrBlock', 'AvailableIpAddressCount', 'DefaultForAz', 'State', 'MapPublicIpOnLaunch'],
    Instances: ['InstanceId', 'InstanceType', 'Price', 'PrivateIpAddress', 'PublicDnsName', 'PublicIpAddress'],
    DBInstances: ['AvailabilityZone', 'DBInstanceClass', 'AllocatedStorage', 'DBInstanceIdentifier', 'DbiResourceId', 'Engine', 'StorageType'],
    LoadBalancers: ['ResourceID', 'DNSName', 'LoadBalancerName', 'Scheme', 'State', 'Type'],
    application: ['ResourceID', 'DNSName', 'LoadBalancerName', 'Scheme', 'State', 'Type'],
    classic: ['ResourceID', 'DNSName', 'LoadBalancerName', 'Scheme', 'State', 'Type'],
    network: ['ResourceID', 'DNSName', 'LoadBalancerName', 'Scheme', 'State', 'Type'],
    NatGateways: ['NatGatewayId', 'State'],
    NetworkAcls: ['NetworkAclId', 'IsDefault'],
    Vpcs: ['LoadBalancers', 'CidrBlock', 'IsDefault', 'State', 'subnets'],
    // NatGateways: "M14.075,9.531c0,0-2.705-1.438-5.158-1.438c-2.453,0-4.862,0.593-4.862,0.593L3.971,9.869c0,0,0.19,0.19,0.528,0.53c0.338,0.336,0.486,3.741,1.838,5.094c1.353,1.354,4.82,1.396,5.963,0.676c1.14-0.718,2.241-3.466,2.241-4.693c0-0.38,0-0.676,0-0.676c0.274-0.275,1.615-0.303,1.917,0c0,0,0,0.296,0,0.676c0,1.227,1.101,3.975,2.241,4.693c1.144,0.72,4.611,0.678,5.963-0.676c1.355-1.353,1.501-4.757,1.839-5.094c0.338-0.34,0.528-0.53,0.528-0.53l-0.084-1.183c0,0-2.408-0.593-4.862-0.593c-2.453,0-5.158,1.438-5.158,1.438C16.319,9.292,14.737,9.32,14.075,9.531z"
  };
  ngOnInit() {
    this.filteredTagKeys = this.keyControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._tagFilter(value))
      );
    this.filteredTagValues = this.valueControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._valueFilter(value))
      );
  }

  constructor(
    public dialogRef: MatDialogRef<VisualizationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private computeService: ComputeService,
    private databaseService: DatabaseService,
    private renderer2: Renderer2,
    private el: ElementRef
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCloseVisualization() {
    this.dialogRef.close();
  }

  onApplicationView(event) {
    this.applicationView = !this.applicationView;
    if (!this.applicationView) {
      if (this.selectedKey && this.selectedValue) {
        this.groupedForcedStabilized = false;
        this.vpcDataFiltered = Object.assign({}, this.vpcData);
      }
    } else {
      this.keyControl.setValue(null);
      this.valueControl.setValue(null);
      this.selectedKey = null;
      this.selectedValue = null;
      this.tagValues = null;
    }
  }

  onKeySelect(key) {
    this.selectedKey = key;
    this.selectedValue = null;
    this.valueControl.setValue('');
    this.tagValues = this.keyValuePairs[key];
    this.filteredTagValues = this.valueControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._valueFilter(value))
      );
  }

  onValueSelect(value) {
    this.groupedForcedStabilized = false;
    this.selectedValue = value;
    let nodes = this.vpcData.nodes.slice(0);
    let filteredNodes = nodes.filter(node => {
      if (node.Tags && node.Tags.length > 0) {
        const matchingTag = node.Tags.find(tag => tag.Key === this.selectedKey && tag.Value === this.selectedValue);
        if (matchingTag) {
          return node
        }
      }
    })
    let data = {
      nodes: filteredNodes,
      links: this.formLinks(filteredNodes)
    }
    this.vpcDataFiltered = data;
    this.vpcDataFiltered = Object.assign({}, this.vpcDataFiltered);
  }

  onRegionSelected(region) {
    this.selectedRegion = region;
    this.selectedVpc = null;
    this.visualizationData = null;
    this.initComputeData();
  }

  initComputeData() {
    this.isLoading = true;
    const params = {
      Region: this.selectedRegion || this.awsRegions[0]
    }
    forkJoin(
      this.computeService.getCompute(params),
      this.databaseService.getDatabase(params)
    ).subscribe(res => {
      this.computeData = res[0].data;
      this.computeData = this.findNoVpc(res[0].data);
      this.computeData['Instances'].map(instance => {
        if (instance.State) {
          instance.type = instance.State.Name === 'running' ? 'Instances' : 'InstancesStopped';
        }
      });
      // this.computeData['Instances'].map(i => i.State = Math.random() >= 0.5);
      // this.computeData = this.replicateData(res[0].data);
      // console.log(this.computeData);
      this.databaseData = res[1].data;
      this.databaseData = this.findNoVpcDB(res[1].data);
      this.computeData.LoadBalancers = [].concat.apply([], [this.computeData.LoadBalancers, this.computeData.ClassicBalancers]);
      this.computeData.LoadBalancers.map(balancer => {
        if (balancer.type === 'ClassicBalancers' || balancer.type === 'LoadBalancers') {
          let tags = [];
          if (balancer.Tags && balancer.Tags.length > 0) {
            balancer.Tags.map(tag => {
              if (tag.TagDescriptions && tag.TagDescriptions.length > 0) {
                tag.TagDescriptions.map(desc => {
                  if (desc.Tags.length > 0) {
                    tags.push(desc.Tags)
                  }
                })
              }
            })
          }
          balancer.Tags = [].concat.apply([], tags);
        }
        if (balancer.type === 'ClassicBalancers') {
          balancer.VpcId = balancer.VPCId;
          balancer.Type = 'classic';
        }
      })
      this.isLoading = false;
      this.initVisualisationData(this.computeData, this.databaseData);
    },
      err => {
        console.log(err);
        this.isLoading = false;
      });
  }

  initVisualisationData(compute, databases) {
    // compute.Instances.map(instance => instance.type = instance.State ? 'Instances' : 'InstancesStopped');

    compute.Subnets.map(subnet => {
      subnet.Instances = compute.Instances.filter(instance => instance.SubnetId && instance.SubnetId === subnet.SubnetId);
      // subnet.Instances = compute.Instances.filter(instance => instance.SubnetId === subnet.SubnetId);
      subnet.NatGateways = compute.NatGateways.filter(gateway => gateway.SubnetId && gateway.SubnetId === subnet.SubnetId);
    });
    compute.Vpcs.map(vpc => {
      vpc.subnets = compute.Subnets.filter(subnet => subnet.VpcId && subnet.VpcId === vpc.VpcId);
      vpc.LoadBalancers = compute.LoadBalancers.filter(balancer => balancer.VpcId && balancer.VpcId === vpc.VpcId);
      vpc.LoadBalancers.map(balancer => balancer.type = balancer.Type);
      vpc.NetworkAcls = compute.NetworkAcls.filter(networkAcl => networkAcl.VpcId && networkAcl.VpcId === vpc.VpcId);
      vpc.DBInstances = databases.DBInstances.filter(DBInstance => DBInstance.DBSubnetGroup && DBInstance.DBSubnetGroup.VpcId && DBInstance.DBSubnetGroup.VpcId === vpc.VpcId);
    });
    compute.Vpcs.map((resource, i) => resource.color = (i < this.colors.length) ? this.colors[i] : this.colors[Math.floor(Math.random() * this.colors.length)]);
    this.visualizationData = compute.Vpcs;
    console.log(this.visualizationData)
  }

  onVpcSelect(value) {
    this.groupedForcedStabilized = false;
    this.d3GroupClusteringContainer.nativeElement.remove();
    this.selectedResource = value.vpc;
    this.selectedVpc = value.vpc;
    let instances = [];
    this.selectedVpc.subnets.map((subnet, i) => {
      instances = instances.concat(subnet.Instances, subnet.NatGateways);
      instances.push({ SubnetId: subnet.SubnetId, type: 'Invisible', id: subnet.SubnetId })
    });
    instances = instances.concat(this.selectedVpc.DBInstances, this.selectedVpc.LoadBalancers, this.selectedVpc.NetworkAcls);
    instances.map(r => { if (r._id) { r.id = r._id } });
    let links = this.formLinks(instances);
    this.getKeyValuePair(instances);
    // this.keyValuePairs = this.getKeyValuePair(instances);
    this.vpcData = {
      nodes: instances,
      links: links
    };
    this.vpcDataFiltered = {
      nodes: instances,
      links: links
    };
    // this.vpcDataFiltered = Object.assign({}, this.vpcData);
  }

  getKeyValuePair(resources) {
    let keyValuePairs = {};
    resources.map(resource => {
      if (resource.Tags && resource.Tags.length > 0) {
        resource.Tags.map(tag => {
          if (keyValuePairs[tag.Key]) {
            if (keyValuePairs[tag.Key].indexOf(tag.Value) < 0) {
              keyValuePairs[tag.Key].push(tag.Value)
            }
          } else {
            keyValuePairs[tag.Key] = [tag.Value]
          }
        })
      }
    });
    this.keyValuePairs = keyValuePairs;
    this.tagKeys = Object.keys(this.keyValuePairs)
  }

  onAllRegions() {
    this.selectedRegion = null;
  }

  onAllVpcs() {
    this.applicationView = false;
    this.d3GroupedForcedDirectedContainer.nativeElement.remove();
    this.selectedVpc = null;
    this.selectedResource = null;
  }

  formLinks(instances) {
    let links = [];
    instances.map((instance, i) => {
      switch (instance.type) {
        case 'LoadBalancers1':
        case 'network1':
        case 'application':
          // case 'classic':
          instance.AvailabilityZones.map(zone => {
            let targetInstance = instances.map((e, i) => e.id === zone.SubnetId ? i : undefined).filter(x => x > -1);
            links.push({ source: i, target: targetInstance[0], value: 2, type: 'association' });
          });
          instance.Target.map(target => {
            if (target.length > 0 && target[0].Target) {
              let targetInstance = instances.map((e, i) => { return e.InstanceId === target[0].Target.Id ? i : undefined }).filter(x => x > -1);
              links.push({ source: i, target: targetInstance[0], value: 1, type: 'link' })
            }
          });
          break;
        case 'classic':
          instance.Instances.map(instance => {
            let targetInstance = instances.map((e, i) => { return e.InstanceId === instance.InstanceId ? i : undefined }).filter(x => x > -1);
            if(targetInstance.length > 0) {
              links.push({ source: i, target: targetInstance[0], value: 1, type: 'link' })            
            }
          })
          break;
        case 'NetworkAcls':
          instance.Associations.map(association => {
            let targetInstance = instances.map((e, i) => e.id === association.SubnetId ? i : undefined).filter(x => x > -1);
              links.push({ source: i, target: targetInstance[0], value: 2, type: 'association' });
          })
          break;
        case 'DBInstances':
          instance.DBSubnetGroup.Subnets.map(subnet => {
            let targetInstance = instances.map((e, i) => e.id === subnet.SubnetIdentifier ? i : undefined).filter(x => x > -1);
            links.push({ source: i, target: targetInstance[0], value: 2, type: 'association' });
          })
          break;
        default:
          break;
      }
    });
    return links;
  }

  onResourceSelect(resource) {
    this.selectedSubnets = [];
    switch (resource.type) {
      case 'Subnets':
        this.selectedSubnets = [];
        this.selectedSubnets.push(resource.id);
      case 'Instances':
        this.selectedSubnets.push(resource.SubnetId);
        this.selectedResource = resource;
        break;
      case 'LoadBalancers':
        resource.AvailabilityZones.map(zone => this.selectedSubnets.push(zone.SubnetId));
        this.selectedResource = resource;
        break;
      case 'NetworkAcls':
        resource.Associations.map(association => this.selectedSubnets.push(association.SubnetId));
        this.selectedResource = resource;
        break;
      case 'DBInstances':
        resource.DBSubnetGroup.Subnets.map(subnet => this.selectedSubnets.push(subnet.SubnetIdentifier));
        this.selectedResource = resource;
        break;
      case 'NatGateways':
        this.selectedSubnets.push(resource.SubnetId);
        this.selectedResource = resource;
        break;
      default:
        this.selectedSubnets.push(resource.id);
        this.selectedResource = this.selectedVpc.subnets.find(subnet => subnet.SubnetId === resource.id);
        break;
    }
  }

  private _tagFilter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.tagKeys.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _valueFilter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.tagValues.filter(option => option.toLowerCase().includes(filterValue));
  }

  onGroupForceStabilize() {
    this.groupedForcedStabilized = true;
  }

  replicateData(data) {
    const instancesNumber = 20;
    for (let i = 0; i < instancesNumber; i++) {
      let dupInstance = Object.assign({}, data.Instances[i]);
      dupInstance.InstanceId = this.makeid(5);
      dupInstance._id = this.makeid(5);
      dupInstance.SubnetId = null;
      dupInstance.VpcId = null;
      data.Instances.push(dupInstance)
    }

    // const balancersNumber = 5;
    // for (let i = 0; i < balancersNumber; i++) {
    //   let dupBalancer = Object.assign({}, data.LoadBalancers[i]);
    //   // dupBalancer.InstanceId = this.makeid(5);
    //   dupBalancer._id = this.makeid(5);
    //   data.LoadBalancers.push(dupBalancer)
    // }

    // const classicNumber = 30;
    // for (let i = 0; i < classicNumber; i++) {
    //   let dupClassicBalancer = Object.assign({}, data.ClassicBalancers[i]);
    //   // dupBalancer.InstanceId = this.makeid(5);
    //   dupClassicBalancer._id = this.makeid(5);
    //   data.ClassicBalancers.push(dupClassicBalancer)
    // }

    return data;
  }
  findNoVpc(data) {
    const classicSubnetId = 'classic-subnet';
    const classicVpcId = 'classic-vpc';
    let nullVpcs = data.Instances.filter(i => !i.VpcId);
    let nullVpcsBalancers = data.ClassicBalancers.filter(i => !i.VPCId);
    if(nullVpcs.length > 0 || nullVpcsBalancers.length > 0) {
      data.Instances.map(i => {
        if(!i.VpcId) {
          i.VpcId = classicVpcId;
          i.SubnetId = classicSubnetId
        }
      })
      data.ClassicBalancers.map(i => {
        if(!i.VPCId) {
          i.VPCId = classicVpcId;
          i.Subnets = [classicSubnetId];
        }
      })
      data.Vpcs.push(
        {
          VpcId: classicVpcId,
          type: 'Vpcs',
          Region: this.selectedRegion
        }
      )
      data.Subnets.push(
        {
          SubnetId: classicSubnetId,
          VpcId: classicVpcId,
          type: 'Subnets'
        }
      )
    };
    return data
  }

  findNoVpcDB(data) {
    const classicSubnetId = 'classic-subnet';
    const classicVpcId = 'classic-vpc';
    let nullVpcsDbs = data.DBInstances.filter(i => i.DBSubnetGroup === null);
    if(nullVpcsDbs.length > 0) {
      data.DBInstances.map(i => {
        if(i.DBSubnetGroup === null) {
          i.DBSubnetGroup = {
            VpcId: classicVpcId,
            Subnets: [{SubnetIdentifier: classicSubnetId}]
          }
        }
      })
    };
    return data
  }

  makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
