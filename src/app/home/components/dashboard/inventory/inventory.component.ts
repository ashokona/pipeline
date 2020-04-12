import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import colors from '../../../../../assets/custom-colors';
import { DashboardService } from '../../../services/dashboard.service';
import { BroadcasterService } from 'src/app/shared/services/broadcaster.service';

@Component({
  selector: 'cops-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})

export class InventoryComponent implements OnInit {
  loadingState: string = 'loadingGraph';
  inventoryPieChartData;
  inventoryPieChartConfig = {
    is3D: true,
    legend: { position: 'bottom', maxLines: 3, minLines:3 },
    // backgroundColor: colors.inventorySecondary,
    animation:{
      duration: 1000,
      easing: 'out',
      startup: true
    }
  };
  inventoryPieElementId;
  inventoryBarChartData;
  inventoryBarChartConfig = {
    legend: { position: 'top', maxLines: 3 },
    isStacked: true,
    // backgroundColor: colors.inventorySecondary,
    animation:{
      duration: 1000,
      easing: 'out',
      startup: true
    }
  };
  inventoryBarElementId;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private dashboardService: DashboardService,
    private broadCaster: BroadcasterService
  ) { }

  ngOnInit() {

    this.getInventorySummary();
    this.getMonthlyInventorySummary();
    this.broadCaster.onGroupChange().pipe(takeUntil(this.destroy$)).subscribe((payload) => {
      this.getInventorySummary();
      this.getMonthlyInventorySummary();
    });
  }

  getInventorySummary() {
    this.dashboardService.getInventorySummary().subscribe(
      res => {
          this.initInventoryPieChart(res.data);
          this.loadingState = null;
      },
      err => {
        this.loadingState = 'error';
      }
    )
  }

  initInventoryPieChart(data) {
    let inventoryPieChartData = [
      ['Type', 'Risks Identified']
    ];
    for(let key in data) {
      inventoryPieChartData.push([key, data[key]])
    }
    this.inventoryPieElementId = 'dashboard-inventory-pie-chart';
    this.inventoryPieChartData = inventoryPieChartData;
  }

  getMonthlyInventorySummary() {
    this.loadingState = 'loadingGraph';
    this.dashboardService.getMonthlyInventorySummary().subscribe(
      res => {
        // if(res.data.length > 0) {
          this.initInventoryBarGraph(res.data);
          this.loadingState = null;
        // } else {
        //   this.loadingState = 'nodata';
        // }
      },
      err => {
        this.loadingState = 'error';
      }
    )
  }

  initInventoryBarGraph(data) {
    // this.inventoryBarChartData = [];
    const months = {
      1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Aug',
      9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec'
    };
    const resources = {
      RunInstances: 'EC2', CreateLoadBalancer: 'Balancer', CreateBucket: 'S3', CreateDBInstance: 'RDS'
    }
    let inventoryBarChartData = [Object.values(resources)];
    inventoryBarChartData[0].unshift('Month')
    data.map(data => {
      let row = [months[data.month]];
      Object.keys(resources).map(resource => {
        let eventData = data.events.find(e => e.eventName === resource);
        row.push(eventData ? eventData.count : 0);
      })
      inventoryBarChartData.push(row);
    });
    this.inventoryBarChartData = inventoryBarChartData;
    this.inventoryBarElementId = 'dashboard-inventory-bar-chart';
  }

}
