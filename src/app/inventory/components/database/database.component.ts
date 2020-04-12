import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Tab } from '../../../shared/models/tabs';
import { ComputeService } from '../../services/compute.service';
import AWSRegions from '../../../shared/data/aws-regions';
import { DatabaseService } from '../../services/database.service';
import { BroadcasterService } from 'src/app/shared/services/broadcaster.service';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'cops-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit, OnDestroy {
  isLoading = true;
  currentRoute = 'DBInstances';
  columnsData;
  databaseData: any;
  data: any;
  awsRegions = AWSRegions;
  selectedRegion;
  tabs: any[] = [
    {
      label: 'DBInstances',
      route: 'DBInstances',
      columnsData: {
        StorageType: {},
        AllocatedStorage: {},
        DBInstanceClass: {},
        DBInstanceStatus: {},
        Engine: {},
        Actions: [
          { columnId: 'security', icon: 'security', name: "Security"}
        ]
      }
    }
  ];
  selectedTabIndex: Number;
  visData: any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private router: Router,
    private databaseService: DatabaseService,
    private broadCaster: BroadcasterService,
    private inventoryService: InventoryService,
  ) { }

  ngOnInit() {
    this.initDatabaseData();
    this.initResourcesCount();
    this.broadCaster.onGroupChange().pipe(takeUntil(this.destroy$)).subscribe((payload) => {
      this.initDatabaseData();
      this.initResourcesCount();
    });
    this.selectedRegion = this.awsRegions[0];
  }

  initDatabaseData() {
    this.isLoading = true;
    const params = {
      Region: this.selectedRegion || this.awsRegions[0]
    }
    this.databaseService.getDatabase(params).subscribe(
      res => {
        this.databaseData = res.data;
        this.columnsData = this.tabs[0].columnsData;
        this.data = this.databaseData[this.currentRoute];
        this.isLoading = false;
        // this.initVisData(this.databaseData);
        //console.log(res)
      },
      err => {
        console.log(err);
        this.isLoading = false;
      }
    )
  }

  onRegionChange() {
    this.initDatabaseData();
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
    this.data = this.databaseData[this.currentRoute];
  }

  initVisData(data) {
    data['Subnets'].map(subnet => {
      let ec2s = data['EC2'].filter(ec2 => {
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

}
