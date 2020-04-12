import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComplianceDashboardService } from '../../services/complianceDashboard.service';
import { BroadcasterService } from '../../../shared/services/broadcaster.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'cops-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  columnChartData: any[];
  columnChartConfig: any;
  columnChartElementId: String;
  columnChartReportState = 'loadingGraph';


  inventoryPieChartData;
  inventoryPieChartConfig;
  inventoryPieElementId;


  areaChartData: any[];
  areaChartConfig: any;
  areaChartElementId: String;

  columnChartData4: any[];
  columnChartConfig4: any;
  columnChartElementId4: String;

  columnChartData5: any[];
  columnChartConfig5: any;
  columnChartElementId5: String;
  complianceReportElementId: string = 'complince-report-bar-chart';
  complianceReportBarChartConfig = {
    legend: { position: 'top', maxLines: 1 },
    vAxis: {format: '0'},
    hAxis: {format: '0'},
  };
  complianceReportBarChartData = [
    ['Service', 'Count']
  ];
  tagComplianceCount = 0;
  // showChart = false;
  complianceReportState = 'loadingGraph';
  destroy$: Subject<boolean> = new Subject<boolean>();

  Total = 0;
  constructor(private dashboardService: ComplianceDashboardService,
    private broadCaster: BroadcasterService) { }

  ngOnInit() {
    this.initBarGraph();
    this.getTagReport();
    this.getBackedupResources();
    this.getNonBackedupResources();
    this.broadCaster.onGroupChange().pipe(takeUntil(this.destroy$)).subscribe((payload) => {
      // this.showChart = false;
      this.complianceReportState = 'loadingGraph';
      this.initBarGraph();
      this.getTagReport();
    });
  }

  buildGraph(complianceData) {
    this.complianceReportBarChartData = [
      ['Service', 'Count'],
      ...complianceData,
    ];
    // this.showChart = true;
    this.complianceReportState = null;
  }

  getTagReport() {
    this.tagComplianceCount = 0;
    this.dashboardService.getTagReport().subscribe((res) => {
      let complianceData = [];
      if (res.data.length) {
        res.data.map(report => {
          this.tagComplianceCount += report.count;
          complianceData.push([report.resourceType.toLocaleUpperCase(), report.count]);
        })
        this.buildGraph(complianceData);
      } else {
        this.complianceReportState = 'nodata';
      }
    }, (err) => {
      this.complianceReportState = 'error';
    });
  }

  getBackedupResources() {
    this.dashboardService.getBackedUpResources().subscribe(res => {
      if (res.length) {
        let count = 0;
        res.forEach(item => {
          count = count + item.totalCount;
        })
        this.columnChartData.push(['Backup Volumes', count])
      }
      else {
        this.columnChartReportState = 'nodata';
      }
    }, (err) => {
      this.columnChartReportState = 'error';
    })
  }

  getNonBackedupResources() {
    this.dashboardService.getNonBackedUpResources().subscribe(res => {
      if (res.length) {
        let count = 0;
        res.forEach(item => {
          count = count + item.totalCount;
        })
        this.columnChartData.push(['NonBackup Volumes', count])
        this.columnChartReportState = null;
      }
      else {
        this.columnChartReportState = 'nodata';
      }
    }, (err) => {
      this.columnChartReportState = 'error';
    })
  }

  initBarGraph() {
    this.columnChartData = [
      ['resource', 'count']
    ];

    this.columnChartConfig = {
      legend: { position: 'right', maxLines: 3 },
      bar: { groupWidth: '75%' },
      isStacked: true,
    };
    this.columnChartElementId = 'cost-column-chart';

    this.inventoryPieChartData = [
      ['Type', 'Risks Identified'],
      ['EC2', 11],
      ['RDS', 2],
      ['IAM', 2],
    ];
    this.inventoryPieChartConfig = {
      is3D: true,
      legend: { position: 'bottom', maxLines: 3 },
      backgroundColor: '#F1F9FF',
    };
    this.inventoryPieElementId = 'dashboard-inventory-pie-chart';

    this.areaChartData = [
      ['EC2', 'RDS', { role: 'annotation' }],
      ['EC2', 10, 24],
      ['RDS', 16, 23]
    ];

    this.areaChartConfig = {
      legend: { position: 'right', maxLines: 3 },
      bar: { groupWidth: '75%' },
      isStacked: true,
    };
    this.areaChartElementId = 'area-column-chart';

    this.columnChartData4 = [
      ['EC2', 'RDS', { role: 'annotation' }],
      ['EC2', 10, 24],
      ['RDS', 16, 23]
    ];

    this.columnChartConfig4 = {
      legend: { position: 'right', maxLines: 3 },
      bar: { groupWidth: '75%' },
      isStacked: true,
    };
    this.columnChartElementId4 = 'cost-column-chart4';

    this.columnChartData5 = [
      ['EC2', 'RDS', { role: 'annotation' }],
      ['EC2', 10, 24],
      ['RDS', 16, 23]
    ];

    this.columnChartConfig5 = {
      legend: { position: 'right', maxLines: 3 },
      bar: { groupWidth: '75%' },
      isStacked: true,
    };
    this.columnChartElementId5 = 'cost-column-chart5';
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
