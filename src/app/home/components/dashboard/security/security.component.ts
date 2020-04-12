import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DashboardService } from '../../../services/dashboard.service';
import { BroadcasterService } from 'src/app/shared/services/broadcaster.service';
import colors from '../../../../../assets/custom-colors';

@Component({
  selector: 'cops-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit, OnDestroy {
  loadingState: string = 'loadingGraph';
  securityPieChartData: any[];
  securityPieChartConfig: any = {
    is3D: true,
    legend: { position: 'top', maxLines: 3 },
    slices: {2: {color: '#eedf30'}, 1:{color: 'orange'}, 0:{color: 'red'}},
    // backgroundColor : colors.securitySecondary,
    animation:{
      duration: 1000,
      easing: 'out',
      startup: true
    }
  };
  securityPieElementId: String;
  Resources: any;
  Risks = [
    ['High', 0],
    ['Medium', 0],
    ['Low', 0],
  ];
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private dashboardService: DashboardService,
    private broadCaster: BroadcasterService
  ) { }

  ngOnInit() {
    // this.securityPieChartConfig = ;
    this.getResources();
    this.broadCaster.onGroupChange().pipe(takeUntil(this.destroy$)).subscribe((payload) => {
      this.getResources();
    });
  }

  getResources() {
    this.loadingState = 'loadingGraph';
    this.dashboardService.getResources().subscribe(
      res => {
        if(res.data.length > 0) {
          this.Resources = res.data;
          this.Resources.map(each => {
              if(each.type == 'Failure'){
                this.Risks[0][1] = each.count;
                each.type = 'High';
              }
              else if(each.type == 'Info'){
                this.Risks[1][1] = each.count;
                each.type = 'Medium';
              }
              else if(each.type == 'Warning'){
                this.Risks[2][1] = each.count;
                each.type = 'Low';
              }
          });
          this.initRiskChart(this.Risks);
          this.loadingState = null;
        } else {
          this.loadingState = 'nodata';
        }
      },
      err => {
        this.loadingState = 'error';
      }
    );
  }

  initRiskChart(risks) {
    let securityPieChartData = [
      ['Type', 'Risks Identified']
    ];
    this.securityPieElementId = 'dashboard-security-pie-chart';
    // let securityPieChartData = [];
    risks.map(risk => {
      securityPieChartData.push(risk);
    })
    this.securityPieChartData = securityPieChartData;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
