import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';


import { SecurityService } from '../../services/security.service';
import { BroadcasterService } from 'src/app/shared/services/broadcaster.service';

@Component({
  selector: 'cops-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit, OnDestroy {
  isRisksLoading: Boolean = true;
  showRisk: Boolean = false;
  isReportLoading: Boolean = true;
  selectedResorceType: any = 'all';
  selectedRiskType: any = 'All';
  selectedBenchmark = 'all';
  benchmarks = ['all'];
  benchmarkDisplay = [
    { type: 'all', displayName: 'Cloud COpS Recommended Best Practice' }, 
    { type: 'cis', displayName: 'CIS AWS Foundations Benchmark v1' },
    { type: 'hipaa', displayName: 'AWS HIPAA' }
  ];
  selectedAccount;
  securityReports: any[];
  cloud_Reports: any[];
  allData;
  highData;
  mediumData;
  lowData;
  totalCount;
  selectedRowIndex;
  array: any[] = [];
  displayedColumns = ['AccountId', 'Total', 'High', 'Medium', 'Low'];
  dataSource;
  riskdata: any[];

  tableOptions = {
    tableTitle: 'Reports',
    isDisplaytitle: true,
    isRefresh: true,
    isDownload: true,
    isSelectable: false,
    isMultiSelect: false,
    isDeletable: false,
    excelName: 'Security_Report'
  };
  tableData: any[];

  // displayedRiskColumns: any = {};
  displayedRiskColumns: any = {
    ResourceID: {
      displayName: 'Resource ID',
    },
    Region: {
      displayName: 'Region',
    },
    Message: {
      displayName: 'Message',
    },
    Action: {
      displayName: 'Resolution Recommendation',
    }
  };
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private route: ActivatedRoute,
    private SecurityService: SecurityService,
    private broadCaster: BroadcasterService
  ) { }

  ngOnInit() {
    this.cloudReports();
    this.broadCaster.onGroupChange().pipe(takeUntil(this.destroy$)).subscribe((payload) => {
      this.cloudReports();
    });
    // console.log(this.route.snapshot.data);
  }

  cloudReports() {
    this.SecurityService.getcloudReports().subscribe(
      res => {
        // account aggregated data
        this.cloud_Reports = res.data.finalDataSet;
        // risk data
        this.allData = res.data;
        this.resetBenchmark();
        this.refreshTopGrid();
        // console.log(this.dataSource.data)
        this.isReportLoading = false;

        this.isRisksLoading = false;
      },
      err => {
        console.log(err);
        this.isRisksLoading = false;
        this.riskdata = [];
      }
    )
  }

  refreshTopGrid() {
    if (this.cloud_Reports[this.selectedResorceType][this.selectedBenchmark]) {
      this.securityReports = this.cloud_Reports[this.selectedResorceType][this.selectedBenchmark].map(x => 
        { 
          return { AccountId: x.AccountId, Total: (x.Failure + x.Warning + x.Info),
          High: x.Failure, Medium: x.Warning, Low: x.Info, Good: x.Good };
        })
      this.selectedRowIndex = this.securityReports[0].AccountId;
      if(this.securityReports[0].Good)
        delete this.securityReports[0].Good;
      this.riskDataShow(this.securityReports[0]);
      this.dataSource = new MatTableDataSource<Element>(this.securityReports);
    }
    else{
      this.securityReports = undefined;
    }
  }

  onResourceToggle(type: any) {
    this.selectedResorceType = type.value;
    this.resetBenchmark();
    this.refreshTopGrid();
    // this.selectedRowIndex = '';
    // this.showRisk = false;
  }

  resetBenchmark() {
    const availableBenchmarks = Object.keys(this.cloud_Reports[this.selectedResorceType]);
    this.benchmarks = availableBenchmarks.sort();
    if (!availableBenchmarks.includes(this.selectedBenchmark)) {
      this.selectedBenchmark = availableBenchmarks[0];
    }
  }

  onBenchmarkChange(type: any) {
    this.selectedBenchmark = type.value;
    this.refreshTopGrid();
    // this.selectedRowIndex = '';
    // this.showRisk = false;
  }

  onRiskToggle(type = 'All') {
    if (this.selectedResorceType == 'all') {
      this.selectedRiskType = type;
      let sevirity: any;
      var risk = this.allData.columnData.filter(ele => (ele.AccountId === this.selectedAccount
        && ele.Benchmark.includes(this.selectedBenchmark)));;
      if (this.selectedRiskType == 'High') {
        sevirity = "Failure";
        risk = risk.filter(d => { return (d.Severity === sevirity) });
      }
      else if (this.selectedRiskType == 'Medium') {
        sevirity = "Warning";
        risk = risk.filter(d => { return (d.Severity === sevirity) });
      }
      else if (this.selectedRiskType == 'Low') {
        sevirity = "Info";
        risk = risk.filter(d => { return (d.Severity === sevirity) });
      }
      this.riskdata = risk.map(y => { return { ResourceID: y.ResourceID, Region: y.Region, Message: y.Message, Action: y.Action } })
      this.tableData = [].concat.apply([], Object.values(this.riskdata));
      // console.log(this.riskdata)
    } else {
      this.selectedRiskType = type;
      let sevirity: any;
      var risk = this.allData.columnData.filter(ele => (ele.ServiceName === this.selectedResorceType
        && ele.AccountId === this.selectedAccount && ele.Benchmark.includes(this.selectedBenchmark)));
      if (this.selectedRiskType == 'High') {
        sevirity = "Failure";
        risk = risk.filter(d => { return (d.Severity === sevirity) });
      }
      else if (this.selectedRiskType == 'Medium') {
        sevirity = "Warning";
        risk = risk.filter(d => { return (d.Severity === sevirity) });
      }
      else if (this.selectedRiskType == 'Low') {
        sevirity = "Info";
        risk = risk.filter(d => { return (d.Severity === sevirity) });
      }
      this.riskdata = risk.map(y => { return { ResourceID: y.ResourceID, Region: y.Region, Message: y.Message, Action: y.Action } })
      this.tableData = [].concat.apply([], Object.values(this.riskdata));
    }
  }

  onRefreshData() {
    console.log('refresh data');
    this.cloudReports();
  }

  riskDataShow(row) {
    // console.log(row)
    this.showRisk = true;
    this.selectedAccount = row.AccountId;
    this.selectedRowIndex = row.AccountId;
    this.onRiskToggle();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

export interface Element {
  AccountId: number;
  Total: number;
  High: number;
  Medium: number;
  Low: number;
}