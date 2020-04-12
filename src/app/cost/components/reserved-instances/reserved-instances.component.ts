import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tab } from '../../../shared/models/tabs';
import { InventoryService } from '../../../shared/services/inventory.service';
import { BroadcasterService } from '../../../shared/services/broadcaster.service';
import { CostService } from '../../services/cost.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RecommendationDetailsComponent } from './recommendation-details/recommendation-details.component';

@Component({
  selector: 'cops-reserved-instances',
  templateUrl: './reserved-instances.component.html',
  styleUrls: ['./reserved-instances.component.scss']
})
export class ReservedInstancesComponent implements OnInit {
  currentRoute: String;
  tableOptions;
  displayedColumns;
  columnsData;
  tabs: any[] = [
    {
      label: 'RESERVED INSTANCES',
      route: 'schedules',
      columnsData: {
        // UserId: {},
        OfferingType: {},
        OfferingClass: {},
        Region: {},
        InstanceCount: {},
        InstanceType: {},
        // Actions: [
        //   { columnId: 'security', icon: 'security', name: "Security"}
        // ]
      },
      tableOptions: {
        tableTitle: 'Users',
        isDisplaytitle: true,
        isRefresh: true,
        isDownload: true
      },
      displayedColumns: {
        ReservedInstancesId: {
          displayName: 'ReservedInstancesId',
        },
        InstanceType: {
          displayName: 'Instance Type',
        },
        OfferingType: {
          displayName: 'Offering Type',
        }, Region: {
          displayName: 'Region',
        }
      }
    },
    {
      label: 'RECOMMENDATIONS',
      route: 'reports',
      columnsData: {
        // UserId: {},
        InstanceId: {},
        InstanceType: {},
        AccountId: {},
        Region: {},
        RunningFrom: {
          name: 'Running From (Days)'
        },
        // Actions: [
        //   { columnId: 'security', icon: 'security', name: "Security"}
        // ]
      },
      tableOptions: {
        tableTitle: 'Users',
        isDisplaytitle: true,
        isRefresh: true,
        isDownload: true,
        isCustom: true,
        // isEditable: true,
        customIcon: 'visibility',
        customLabel: 'Add Instances',
      },
      displayedColumns: {
        InstanceId: {
          displayName: 'Instance Id',
        },
        InstanceType: {
          displayName: 'Instance Type',
        },
        AccountId: {
          displayName: 'Account Number',
        },
        Region: {
          displayName: 'Region',
        },
        RunningFrom: {
          displayName: 'Running From (Days)',
        }
      }
    }
  ];

  selectedTabIndex: Number = 0;
  isLoading = true;
  data: any[];
  pricing;

  constructor(
    private router: Router,
    private costService: CostService,
    private inventoryService: InventoryService,
    private broadCaster: BroadcasterService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.setTableConfig(this.selectedTabIndex);
    this.initData();
  }

  setTableConfig(selectedTabIndex) {
    this.displayedColumns = this.tabs[selectedTabIndex].displayedColumns;
    this.tableOptions = this.tabs[selectedTabIndex].tableOptions;
    this.columnsData = this.tabs[selectedTabIndex].columnsData;
  }

  onTabChanged(e) {
    this.selectedTabIndex = this.tabs.findIndex(tab => tab.route === e.route);
    this.setTableConfig(this.selectedTabIndex);
    this.initData();
  }

  onRefreshData(e) {
    this.initData();
  }

  initData() {
    this.isLoading = true;
    this.data = null;
    if (this.selectedTabIndex === 0) {
      this.getReservedInstances()
    }
    if (this.selectedTabIndex === 1) {
      this.getRiRecommendations()
    }
  }

  getReservedInstances() {

    const params = {
      resource: 'ReservedInstances'
    }
    this.inventoryService.getInventoryData(params).subscribe(
      res => {
        this.data = res.data;
        this.isLoading = false;
      }, err => {
        this.isLoading = false;
      }
    )
  }

  getRiRecommendations() {
    this.costService.getRiRecommendations().subscribe(
      res => {
        this.data = res.data.recommendations;
        this.pricing = res.data.pricing;
        this.isLoading = false;
      }, err => {
        this.isLoading = false;
      }
    )
  }

  onRecommendationDetails(e) {
    console.log(e);
    const pricing = this.pricing[e.InstanceType]
    const dialogRef = this.dialog.open(RecommendationDetailsComponent, {
      width: '80%',
      data: pricing
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
