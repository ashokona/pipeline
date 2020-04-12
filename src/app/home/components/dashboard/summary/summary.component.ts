import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import Colors from '../../../../../assets/custom-colors';
import { DashboardService } from '../../../services/dashboard.service';
import { BroadcasterService } from 'src/app/shared/services/broadcaster.service';

@Component({
  selector: 'cops-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, OnDestroy {
  totalSavings: any;
  savingsOpportunity: Number;
  costState: string = 'loading';
  secuirtyState: string = 'loading';
  complainceState: string = 'loading';
  totalRisks: any;
  gaugeType = 'full';
  gaugeValue = 28.3;
  gaugeLabel = 'Speed';
  gaugeAppendText = 'km/hr';
  guageSize = 100;
  warn = Colors.warn;
  success = Colors.success;
  primary = Colors.primary;
  complianceFindings = 0;

  savingsOppPieChartData;
  savingsOppPieChartConfig;
  savingsOppPieElementId;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private dashboardService: DashboardService,
    private broadCaster: BroadcasterService
  ) { }

  ngOnInit() {
    this.initSpends();
    this.initCompliance();
    this.broadCaster.onGroupChange().pipe(takeUntil(this.destroy$)).subscribe((payload) => {
      this.initSpends();
      this.initCompliance();
    });
  }

  public initCompliance() {
    this.complainceState = 'loading'
    this.dashboardService.getTagReport().subscribe((res) => {
      this.complianceFindings = 0;
      res.data.map(report => {
        this.complianceFindings += report.count;
      })
      this.complainceState = null
    }, err=> {
      this.complainceState = 'error'
    })

  }

  initSpends() {
    this.costState = 'loading';
    this.secuirtyState = 'loading'
    this.dashboardService.getSpendsReport().subscribe(
      res => {
        if(res.data.length > 0) {
          const data = res.data[5];
          this.totalSavings = Math.round(data.savings);
          if(Math.round(data.spends - data.savings)>0){
            this.savingsOpportunity = Math.round(data.spends - data.savings);
          }
          else this.savingsOpportunity=0;
          
          this.savingsOppPieChartData = [
            ['Type', 'Risks Identified'],
            ['Total Spends', this.savingsOpportunity],
            ['Savinga Opportinity', this.totalSavings],
          ];
          this.savingsOppPieChartConfig = {
            is3D: true,
            legend: 'none',
            slices: {
              1: { color: 'green' }
            },
            // backgroundColor: Colors.costSecondary
          };
          this.savingsOppPieElementId = 'dashboard-savingsOpp-pie-chart';
          this.costState = null;
        }else {
          this.costState = null;
          this.savingsOpportunity = 0;
          this.totalSavings = 0;
        }
      },
      err => {
        this.costState = 'error';
      }
    )

    this.dashboardService.getRiskCount().subscribe(
      res => {
        if(res.data[0]){
          this.totalRisks = res.data[0].count;
        }
        else{
          this.totalRisks = 0;
        }
        this.secuirtyState = null;
        
      },
      err => {
        this.totalRisks = 0;
        this.secuirtyState = 'error';
      }
    )
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
