  import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { DashboardService } from 'src/app/home/services/dashboard.service';
import { BroadcasterService } from 'src/app/shared/services/broadcaster.service';
import colors from '../../../../../assets/custom-colors';

@Component({
  selector: 'cops-compliance',
  templateUrl: './compliance.component.html',
  styleUrls: ['./compliance.component.scss']
})
export class ComplianceComponent implements OnInit, OnDestroy {
  complianceDonutChartData = [['Type', 'Compliance']];
  complianceDonutChartConfig = {
    legend: 'none',
    pieHole: 0.5,
    // backgroundColor: colors.complianceSecondary,
    animation:{
      duration: 1000,
      easing: 'out',
      startup: true
    }
  };
  complianceDonutElementId = 'dashboard-compliance-pie-chart';
  public tagComplianceCount = 0;
  destroy$: Subject<boolean> = new Subject<boolean>();
  loadingState: string = 'loadingGraph';

  constructor(private dashboardService: DashboardService, private broadCaster: BroadcasterService) { }

  ngOnInit() {
    this.getTagReport();
    this.broadCaster.onGroupChange().pipe(takeUntil(this.destroy$)).subscribe((payload) => {
      this.getTagReport();
    });
  }

  buildGraph(complianceData) {
    this.complianceDonutChartData = [
      ['Type', 'Compliance'],
      ...complianceData
    ];
  }

  getTagReport() {
    this.loadingState = 'loadingGraph';
    this.dashboardService.getTagReport().subscribe((res) => {
      if(res.data.length > 0){
        let complianceData = [];
        res.data.map(report => {
          this.tagComplianceCount += report.count;
          complianceData.push([report.resourceType.toLocaleUpperCase(), report.count]);
        })
        this.buildGraph(complianceData);
        this.loadingState = null;
      } else {
        this.loadingState = 'nodata';
      }
    }, err => {
      this.loadingState = 'error';
    })
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
