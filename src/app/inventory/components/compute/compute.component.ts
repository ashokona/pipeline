import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Tab } from '../../../shared/models/tabs';
import { ComputeService } from '../../services/compute.service';
import { InventoryService } from '../../services/inventory.service';
import AWSRegions from '../../../shared/data/aws-regions';
import { BroadcasterService } from '../../../shared/services/broadcaster.service';

@Component({
  selector: 'cops-compute',
  templateUrl: './compute.component.html',
  styleUrls: ['./compute.component.scss']
})
export class ComputeComponent implements OnInit, OnDestroy {
  isLoading = true;
  currentRoute = 'Vpcs';
  columnsData;
  computeData: any;
  data: any;
  awsRegions = [];
  selectedRegion;
  tabs: any[] = [
    {
      label: 'VPCS',
      route: 'Vpcs',
      value: 33,
      columnsData: {
        VpcId: {},
        IsDefault: {},
        CidrBlock: {},
        OwnerId: {},
        // Actions: [
        //   { columnId: 'security', icon: 'security', name: "Security"}
        // ]
      }
    },
    {
      label: 'SUBNETS',
      route: 'Subnets',
      columnsData: {
        SubnetId: {},
        AvailabilityZone: {},
        VpcId: {
          isLink: true,
          tab: 'Vpcs',
          id: 'VpcId'
        },
        OwnerId: {}
      }
    },
    {
      label: 'EC2',
      route: 'Instances',
      columnsData: {
        InstanceId: {},
        PrivateIpAddress: {},
        InstanceType: {},
        VpcId: {
          isLink: true,
          tab: 'Vpcs',
          id: 'VpcId'
        },
        SubnetId: {
          isLink: true,
          tab: 'Subnets',
          id: 'SubnetId'
        },
        Actions: [
          { columnId: 'State', icon: 'power_settings_new', name: "State"},
          { columnId: 'security', icon: 'security', name: "Security"},
          { columnId: 'complianceFindings', icon: 'assignment', type: 'boolean', name: "Compliance"},
          { columnId: 'ScheduleStatus', icon: 'schedule', name: "Schedule"},
        ]
      }
    },
    {
      label: 'LoadBalancers',
      route: 'LoadBalancers',
      columnsData: {
        Scheme: {},
        ResourceID: {},
        Type: {},
        VpcId: {
          isLink: true,
          tab: 'Vpcs',
          id: 'VpcId'
        }
        // SubnetId: {
        //   isLink: true,
        //   tab: 'Subnets',
        //   id: 'SubnetId'
        // },
      }
    },
    {
      label: 'ClassicBalancers',
      route: 'ClassicBalancers',
      columnsData: {
        Scheme: {},
        ResourceID: {},
        Type: {},
        VPCId: {
          isLink: true,
          tab: 'Vpcs',
          id: 'VpcId'
        }
        // SubnetId: {
        //   isLink: true,
        //   tab: 'Subnets',
        //   id: 'SubnetId'
        // },
      }
    },
  ];
  selectedTabIndex: Number;
  visData: any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private router: Router,
    private computeService: ComputeService,
    private inventoryService: InventoryService,
    private broadCaster: BroadcasterService
  ) { }

  ngOnInit() {
    this.initComputeData();
    this.initResourcesCount();
    this.broadCaster.onGroupChange().pipe(takeUntil(this.destroy$)).subscribe((payload) => {
      this.initComputeData();
      this.initResourcesCount();
    });
    this.selectedRegion = AWSRegions[0];
  }

  initComputeData() {
    this.isLoading = true;
    this.currentRoute = 'Vpcs';
    const params = {
      Region: this.selectedRegion || AWSRegions[0]
    }
    this.computeService.getCompute(params).subscribe(
      res => {
        this.computeData = res.data;
        this.computeData['Instances'].map(instance => {
          if(instance.State) {
            instance.State = instance.State.Name === 'running' ? 'success' : 'warn';
          }
          if(instance.ScheduleStatus) {
            instance.ScheduleStatus = instance.ScheduleStatus ? 'primary' : 'hidden';
          }
        });
        this.computeData.LoadBalancers.map(balancer => {
          if(balancer.Type === 'classic') {
            balancer.VpcId = balancer.VPCId
          }
          delete balancer['VPCId'];
        })
        this.data = this.computeData[this.currentRoute];
        this.columnsData = this.tabs[0].columnsData;
        this.isLoading = false;
      },
      err => {
        this.isLoading = false;
      }
    )
  }

  initResourcesCount() {
    this.inventoryService.getResourcesCount().subscribe(
      res => {
        const resourcesCountByRegion = res.data;
        let regionCountMap = [];
        const resourcesToCount = ['Vpcs', 'Subnets', 'Instances', 'LoadBalancers', 'ClassicBalancers']
        AWSRegions.map(r => {
          // let values = resourcesToCount.map(resource => resourcesCountByRegion[r][resource]);
          let values = this.tabs.map(tab => {
            if(r === this.selectedRegion) {
              tab.value = resourcesCountByRegion[r][tab.route]
            }
            return resourcesCountByRegion[r][tab.route]
          });
          regionCountMap.push(
            {
              region: r,
              count: values.reduce((a, b) => a + b, 0)
            }
          )
        });
        this.awsRegions = regionCountMap;
      },
      err => {}
    )
  }

  onRegionChange() {
    this.initComputeData();
  }

  onTabChanged(tab: any) {
    this.setTab(tab)
  }

  onLinkClicked(details) {
    let tab = this.tabs.filter(tab => tab.route === details.tab);
    this.selectedTabIndex = this.tabs.findIndex(t => t.route === tab[0].route);
    this.setTab(tab[0]);
  }

  setTab(tab) {
    this.currentRoute = tab.route;
    this.columnsData = tab.columnsData;
    this.data = this.computeData[this.currentRoute];
  }

  initVisData(data) {
    data['Subnets'].map(subnet => {
      let ec2s = data['Instances'].filter(ec2 => {
        if (ec2.SubnetId === subnet.SubnetId) {
          return ec2
        }
      })
      if (ec2s.length > 0) {
        subnet.Ec2 = ec2s;
      } else {
        subnet.Ec2 = [];
      }
    })

    data['Vpcs'].map(vpc => {
      let subnets = data['Subnets'].filter(subnet => {
        if (subnet.VpcId === vpc.VpcId) {
          return subnet
        }
      })
      if (subnets.length > 0) {
        vpc.Subnets = subnets;
      } else {
        vpc.Subnets = [];
      }
    })
    this.visData = data;
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
