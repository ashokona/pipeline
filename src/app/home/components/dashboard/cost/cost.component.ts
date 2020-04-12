import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import colors from '../../../../../assets/custom-colors';
import { DashboardService } from '../../../services/dashboard.service';
import { BroadcasterService } from 'src/app/shared/services/broadcaster.service';

@Component({
  selector: 'cops-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.scss']
})
export class CostComponent implements OnInit, OnDestroy {
  currentSpend: Number;
  savingsOpportunity: Number;
  loadingState: string = 'loadingGraph';
  areaChartData;
  areaChartConfig;
  areaElementId;
  config = {
    title: '',
    // hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
    vAxis: { minValue: 0 },
    colors: ['#109618', '#A52B0E', '#3366CC'],
    legend: {
      position: 'top', maxLines: 3
    },
    height: '100%',
    width: '100%',
    // backgroundColor: colors.costSecondary,
    animation:{
      duration: 1000,
      easing: 'out',
      startup: true
    }
  };

  months = {
    1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Aug',
    9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec'
  }
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private dashboardService: DashboardService,
    private broadCaster: BroadcasterService
  ) { }

  ngOnInit() {

    this.getSpendReport();
    this.broadCaster.onGroupChange().pipe(takeUntil(this.destroy$)).subscribe((payload) => {
      this.getSpendReport();
    });
  }

  getSpendReport() {
    this.loadingState = 'loadingGraph';
    this.dashboardService.getSpendsReport().subscribe(
      res => {
        if(res.data.length > 0) {
          const data = res.data[5];
          this.initAreaChart(res.data);
          this.currentSpend = Math.round(data.spends);
          this.savingsOpportunity = Math.round(data.savings);
        } else {
          this.loadingState = 'nodata';
          this.currentSpend = 0;
          this.savingsOpportunity = 0;
        }
      },
      err => {
        this.loadingState = 'error';
      }
    )
  }

  initAreaChart(data) {
    data = this.sortDataByMonth(data);
    const labels = [
      ['Month', 'Savings Achieved', 'Current Spend', 'Savings Opportunity']
    ];
    // this.areaChartData = labels;
    this.areaChartConfig = this.config;
    this.areaElementId = 'dashboard-cost-line-chart';
    this.loadingState = null;
    data.forEach(item => {
      item.month = this.months[item.month];
      item.savings = item.spends < item.savings ? 0 : Math.round((item.spends - item.savings) * 100) / 100;
      item.spends = item.spends < 0 ? 0 : Math.round(item.spends * 100) / 100;
      labels.push(Object.values(item));
    });
    this.areaChartData = labels;
  }

  sortDataByMonth(data) {
    let months = [];
    const today = new Date();
    let d;

    for(let i = 5; i >= 0; i -= 1) {
      d = new Date(today.getFullYear(), today.getMonth() - i, 1);
      months.push(d.getMonth() + 1)
    }
    data.sort((a, b) => {
      return months.indexOf(a.month)
           - months.indexOf(b.month);
    });
    return data;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
