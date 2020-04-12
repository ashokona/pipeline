import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PieChartConfig } from './../../../shared/models/PieChartConfig';
import { SecurityService } from '../../services/security.service';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';
import AWSRegions from '../../../shared/data/aws-regions';
import { BroadcasterService } from '../../../shared/services/broadcaster.service';
import { DownloadReportsService } from '../../../shared/services/download-reports.service';

@Component({
  selector: 'cops-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  isTrendLoading = true;
  loadingState = 'loadingGraph';
  loadingStateCount = 'loadingGraph'
  checked = false;
  disabled = false;
  securitylineChartData = [['Day', 'High', 'Medium', 'Low' ]];
  securitylineChartElementId = 'trend-line-chart';
  securitylineChartConfig = {
    title: 'Weekly Trend',
    curveType: 'function',
    legend: { position: 'bottom' },
    series: {2: {color: '#eedf30'}, 1:{color: 'orange'}, 0:{color: 'red'}},
    hAxis: {
      title: 'Days'
    },
    vAxis: {
      title: 'Risk Count'
    }
  };
  monthlyBarChartData;
  monthlyBarChartConfig = {
    title: 'Monthly Trend',
    legend: { position: 'bottom', maxLines: 3 },
    colors: ['red', 'orange', 'yellow'],
    isStacked: true,
    // backgroundColor: colors.inventorySecondary,
    animation:{
      duration: 1000,
      easing: 'out',
      startup: true
    },
    hAxis: {
      title: 'Month'
    },
    vAxis: {
      title: 'Risk Count'
    }
  };
  monthlyBarElementId;  
  isByResourceLoading: Boolean = true;
  isRiskLoading: Boolean = true;
  response: any[];
  Risks = {
    'High': 0,
    'Medium': 0,
    'Low': 0
  };
  Total: any;
  allData;
  selectedBenchmark = 'all';
  selectedResorceType: any = 'all';
  benchmarks = ['all'];
  benchmarkDisplay = [
    { type: 'all', displayName: 'Cloud COpS Recommended' }, 
    { type: 'cis', displayName: 'CIS AWS Foundations Benchmark v1' },
    { type: 'hipaa', displayName: 'AWS HIPAA' }
  ];

  tableOptions = {
    tableTitle: 'Reports',
    isDisplaytitle: false,
    isRefresh: false,
    isDownload: false,
    isSelectable: false,
    isMultiSelect: false,
    isDeletable: false
  };
  tableData: any[];

  // displayedRiskColumns: any = {};
  displayedRiskColumns: any = {
    CheckName: {
      displayName: 'Rule Name',
    },
    Severity: {
      displayName: 'Severity',
    },
    count: {
      displayName: 'Risk Count',
    }
  };
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private SecurityService: SecurityService,
    private broadCaster: BroadcasterService,
    private downloadReportsService: DownloadReportsService
  ) { }

  ngOnInit() {
    // this.initDashboardDetails();
    this.securityTrendChart();
    this.getNewCount();
    this.monthlyBarChartData = [["Month" , "High", "Medium" , "Low"]];
    this.monthlyBarElementId = 'monthly-trend-chart';
    // this.getResources();
    this.broadCaster.onGroupChange().pipe(takeUntil(this.destroy$)).subscribe((payload) => {
      this.monthlyBarChartData = [["Month" , "High", "Medium" , "Low"]];
      this.securitylineChartData = [['Day', 'High', 'Medium', 'Low' ]];
      // this.initDashboardDetails();
      this.getNewCount();
      this.securityTrendChart();
    });
  }

  getNewCount() {
    this.SecurityService.getcloudReports().subscribe(
      res => {
        this.allData = res.data.finalDataSet;
        this.resetBenchmark()
        this.initDashboardDetails();
      },
      err => {
        console.log(err)
        this.Risks = {
          'High': 0,
          'Medium': 0,
          'Low': 0
        };
        this.loadingStateCount = 'error';
      }
    )
  }

  resetBenchmark() {
    const availableBenchmarks = Object.keys(this.allData[this.selectedResorceType]);
    this.benchmarks = availableBenchmarks.sort();
    if (!availableBenchmarks.includes(this.selectedBenchmark)) {
      this.selectedBenchmark = availableBenchmarks[0];
    }
  }

  onBenchmarkChange(type: any) {
    this.loadingStateCount = 'loadingGraph';
    this.selectedBenchmark = type.value;
    this.initDashboardDetails();
  }

  initDashboardDetails() {
    this.Risks = { 'High': 0, 'Medium': 0, 'Low': 0 };
    this.Total = 0;
    this.allData[this.selectedResorceType][this.selectedBenchmark].map((each) => {
      // console.log(each)
      this.Risks['High'] += each.Failure;
      this.Risks['Low'] += each.Info;
      this.Risks['Medium'] += each.Warning;
    });
    this.Total = this.Risks['High'] + this.Risks['Medium'] + this.Risks['Low'];
    // console.log(this.Risks)
    this.loadingStateCount = null;
  }
    // this.SecurityService.getDashboardValues().subscribe(
    //   res => {
    //     this.response = res.data;

    //     this.response.map((each) => {
    //       if (each.type == 'Failure') {
    //         this.Risks['High'] = each.count;
    //         each.type = 'High';
    //       }
    //       else if (each.type == 'Info') {
    //         this.Risks['Low'] = each.count;
    //         each.type = 'Low';
    //       }
    //       else if (each.type == 'Warning') {
    //         this.Risks['Medium'] = each.count;
    //         each.type = 'Medium';
    //       }
    //     });
    //     this.Total = this.Risks['High'] + this.Risks['Medium'] + this.Risks['Low'];
    //     this.loadingStateCount = null;
    //     // this.isRiskLoading = false;
    //   },
    //   err => {
    //     console.log(err);
    //     this.Risks = {
    //       'High': 0,
    //       'Medium': 0,
    //       'Low': 0
    //     };
    //     this.loadingStateCount = 'error';
    //     this.isByResourceLoading = false;
    //     this.isRiskLoading = false;
    //   }
    // )

  onToggle(event){
    // console.log(event.checked)
    this.checked= event.checked;
    // this.securityTrendChart();
  }

  securityTrendChart() {
    this.loadingState = 'loadingGraph';
    this.SecurityService.getSecurityTrend().subscribe(
      res => {
        // console.log(res.data)
        res.data.HighRisk.map(each => {
          if(each.Severity == 'Failure')
            each.Severity = 'High';
          else if(each.Severity == 'Warning')
            each.Severity = 'Medium';
          else if(each.Severity == 'Info')
            each.Severity = 'Low';
        })
        this.tableData = res.data.HighRisk
        res.data.TrendData.map(each => {
          if(this.securitylineChartData.length > 5)
            this.securitylineChartData.splice(1,1);
          this.securitylineChartData.push([each.weekDay, each.high, each.medium, each.low]);
        })
        var tempDay = 0;
        var tempData = [];
        res.data.TrendData.map(each => {
          if(each.day >= tempDay){
            tempData[each.month] = each;
          }
        })
        for (var v in tempData){
          this.monthlyBarChartData.push([tempData[v].month, tempData[v].high, tempData[v].medium, tempData[v].low]);
        }
        this.loadingState = null;
      },
      err => {
        this.loadingState = 'error';
        console.log(err);
      }
    )
  }

  onDownload() {
    const doc = document.getElementById('security-report-container');
    this.downloadReportsService.downloadReport(doc, 'Security Report', 'security-report');
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
