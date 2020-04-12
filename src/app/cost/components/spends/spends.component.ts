import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
// import { Chart } from 'chart.js';
// import Colors from '../../../../../assets/custom-colors';
import { PieChartConfig } from './../../../shared/models/PieChartConfig';
import { CostDashboardService } from '../../services/cost-dashboard.service';
import RegionsByCountry from './awsregions';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';
import AWSRegions from '../../../shared/data/aws-regions';
import AWSServices from './awsServices';
import { BroadcasterService } from '../../../shared/services/broadcaster.service';
import { DownloadReportsService } from '../../../shared/services/download-reports.service';

@Component({
  selector: 'cops-spends',
  templateUrl: './spends.component.html',
  styleUrls: ['./spends.component.scss']
})
export class SpendsComponent implements OnInit, OnDestroy {

  awsRegions = AWSRegions;
  awsServices = AWSServices;

  showDownloadLocation: Boolean = false;

  regionsByCountry = RegionsByCountry
  treemapChartData: any[];
  treemapChartConfig: any;
  treemapElementId: String;
  totalResourceWiseSpend: number;
  resourceSpendState: string = 'loadingGraph';

  geoChartData: any[];
  geoChartConfig: any;
  geoChartElementId: String;
  totalResionWiseSpend: number;
  regionSpendState: string = 'loadingGraph';

  lineChartData: any[];
  lineChartConfig: any;
  lineChartElementId: String;

  columnChartData: any[];
  columnChartConfig: any;
  columnChartElementId: String;

  columnChartData2: any[];
  columnChartConfig2: any;
  columnChartElementId2: String;
  spendsBarChartData: (string | number)[][];
  spendsBarChartConfig: { legend: { position: string; maxLines: number; }; };
  spendsBarElementId: string;
  destroy$: Subject<boolean> = new Subject<boolean>();
  appcomponentdata = { "startdate": '', "enddate": '', 'allServiceData': '', 'inputdata': '' };
  d3MapData;
  barChartConfig: { legend: { position: string; maxLines: number; }; };
  barChartElementId: string ;
  barChartType:string ;
  barChartData: (string | number) [][];
  graphChartConfig: { legend: { position: string; maxLines: number; }; };
  graphChartElementId: string ;
  graphChartType:string ;
  graphChartData: (string | number) [][];

  constructor(
    private costDashboardService: CostDashboardService,
    private broadCaster: BroadcasterService,
    private downloadReportsService: DownloadReportsService
  ) { }

  onDownload() {
    const doc = document.getElementById('spends-container');
    this.downloadReportsService.downloadReport(doc, 'Spends Report', 'spends-report');
    // if (doc) {
    //   html2canvas(doc).then(canvas => {
    //     const imgData = canvas.toDataURL('image/png');
    //     const document = new jsPDF('landscape');
    //     document.setTextColor(23, 77, 114);
    //     document.text(15, 15, 'COpS Cost Dashboard');
    //     document.addImage(imgData, 'JPEG', 10, 25, 280, 180);
    //     document.save('cops_cost_dashboard.pdf');
    //   });
    // }
  }

  async ngOnInit() {
    this.barChartConfig = {
      legend: { position: 'top', maxLines: 1 },
    };
    this.barChartElementId = 'dashboard-trend-bar-chart';
    this.barChartType = 'column';
    this.barChartData = await this.initSpendTrend();
    this.graphChartConfig = {
      legend: { position: 'top', maxLines: 1 },
    };
    this.graphChartElementId = 'dashboard-trend-graph-chart';
    this.graphChartType = 'column';
    this.graphChartData = await this.initScheduleGraph();
    this.initSpendsByRegion();
    this.initSpendsByResource();
    this.broadCaster.onGroupChange().pipe(takeUntil(this.destroy$)).subscribe((payload) => {
      this.initSpendsByRegion();
      this.initSpendsByResource();
    });
    // Piechart1 Data & Config
    // this.treemapChartData = [
    //   ['RESOURCE', 'Parent', 'SPENDS'],
    //   ['Global', null, 23],
    //   ["Amazon Simple Storage Service", "Global", 0.0000178476],
    //   ["AWS Lambda", "Global", 0]
    // ];
    // this.treemapChartConfig = new PieChartConfig('My Daily Activities at 20 years old', 0.4);
    // this.treemapElementId = 'cost-pie-chart';
    this.lineChartData = [
      ['Year', 'Sales', 'Expenses'],
      ['2004', 1000, 400],
      ['2005', 1170, 460],
      ['2006', 660, 1120],
      ['2007', 1030, 540]
    ];
    this.lineChartElementId = 'cost-line-chart';

    this.geoChartElementId = 'cost-geo-chart';

    this.columnChartData = [
      ['EC2', 'RDS', 'EDS', { role: 'annotation' }],
      ['EC2', 10, 24, ''],
      ['RDS', 16, 23, ''],
      ['EDS', 28, 29, '']
    ];

    this.columnChartConfig = {
      legend: { position: 'top', maxLines: 3 },
      bar: { groupWidth: '75%' },
      isStacked: true,
    };
    this.columnChartElementId = 'cost-column-chart';


    this.columnChartData2 = [
      ['EC2', 'RDS', 'EDS', { role: 'annotation' }],
      ['EC2', 10, 24, ''],
      ['RDS', 16, 23, ''],
      ['EDS', 28, 29, '']
    ];

    this.columnChartConfig2 = {
      legend: { position: 'top', maxLines: 3 },
      bar: { groupWidth: '75%' },
      isStacked: true,
    };
    this.columnChartElementId2 = 'cost-column-chart2';
  }

  initSpendsByRegion() {
    this.regionSpendState = 'loadingGraph';
    this.costDashboardService.getSpendsByRegion().subscribe(
      res => {
        if(res.data.length > 0) {
          const data = res.data[5];
          // console.log(res);
          this.geoChartData = [
            ['COUNTRY', 'COST']
  
          ];
          let regionData = {}
          let maxval = 0;
          let priceArr = [0];
          this.geoChartElementId = 'cost-geo-chart';
          let totalResionWiseSpend = 0;
          this.awsRegions.map(region => {
            const indexOfRegion = data.region.indexOf(region);
            if (indexOfRegion > -1) {
              let cost = data.spends[indexOfRegion];
              if (maxval < cost) {
                maxval = Math.ceil(cost);
              }
              priceArr.push(Math.ceil(cost));
              regionData[region] = {
                name: region,
                totalcost: cost,
                totalresource: 0
              }
              totalResionWiseSpend = totalResionWiseSpend + data.spends[indexOfRegion];
            }
          })
          regionData['maxval'] = maxval;
          priceArr.sort((a, b) => { return a - b });
          regionData['pricedata'] = priceArr;
  
          // this.regionsByCountry.map(country => {
          //   let costByCountry = 0;
          //   country.awsRegionAndCity.map(regionAndCity => {
          //     const indexOfRegion = data.region.indexOf(regionAndCity.region);
          //     if (indexOfRegion > -1) {
          //       regionAndCity['cost'] = data.spends[indexOfRegion];
          //       costByCountry = costByCountry + data.spends[indexOfRegion];
          //       totalResionWiseSpend = totalResionWiseSpend + data.spends[indexOfRegion];
          //     }
          //     this.geoChartData.push([country.country, costByCountry]);
          //   });
          // });
          this.totalResionWiseSpend = Math.round(totalResionWiseSpend);
          this.regionSpendState = null;
          this.d3MapData = regionData
        }
        else {
          this.regionSpendState = 'nodata';
          this.totalResionWiseSpend = 0;
        }
      },
      err => {
        console.log(err);
        this.regionSpendState = 'error';
      }
    )
  }

  initSpendsByResource() {
    this.resourceSpendState = 'loadingGraph';
    this.costDashboardService.getSpendsByResource().subscribe(
      res => {
        if(res.data.length > 0) {
          let last = res.data.length;
          const data = res.data[last-1];
          // this.treemapChartData = [
          //   ['RESOURCE', 'Parent', 'SPENDS'],
          //   ['Global', null, 23]
          // ];
          this.spendsBarChartData = [
            ['Resource', 'Spend'],
  
          ];
          let totalResourceWiseSpend = 0
          if(!data.resource){
            this.spendsBarChartData = [];
          }
          else{
            data.resource.map((resource, index) => {
            let resName;
            this.awsServices.map(each => { if(resource.includes(each.serviceName)){ resName = each.abbre}});
            if(!resName){
              resName = resource;
            }
              this.spendsBarChartData.push([resName, data.spends[index]]);
              totalResourceWiseSpend = totalResourceWiseSpend + data.spends[index];
            });
            // console.log(this.spendsBarChartData)
            // this.treemapChartConfig = new PieChartConfig('My Daily Activities at 20 years old', 0.4);
            // this.treemapElementId = 'cost-pie-chart';
            this.totalResourceWiseSpend = Math.round(totalResourceWiseSpend);
          }
          this.spendsBarChartConfig = {
            legend: { position: 'bottom', maxLines: 1 },
          };
          this.spendsBarElementId = 'dashboard-inventory-bar-chart';
          this.resourceSpendState = null;
          this.totalResourceWiseSpend = 0;
        } else {
          this.resourceSpendState = 'nodata';
        }
      },
      err => {
        console.log(err);
        this.resourceSpendState = 'error';
      }
    )
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  async initSpendTrend() {
    try {
      this.resourceSpendState = 'loadingGraph';
      let months = ['', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      let result = [];
      result.push(['MONTHS', 'TOTAL'])
      let res = await this.costDashboardService.getSpendTrend();
      if(res.data.length > 0) {
        res.data.forEach(element => {
          let arr = [];
          arr.push(months[element.month] + ' ' + element.year);
          arr.push(element.total);
          result.push(arr);
        })
        return result;
      }
      else {
        this.regionSpendState = "NO DATA"
      }
    }
    catch(err) {
      console.log('err = ', err);
      this.regionSpendState = "NO DATA"
      return ['NO DATA', 0];
    }
  }

  async initScheduleGraph() {
    try {
      this.resourceSpendState = 'loadingGraph';
      let result = [];
      result.push(['MONTHS', 'SAVINGS'])
      let res = await this.costDashboardService.getScheduleGraph();
      if(res.Graph.length > 0) {
        res.Graph.forEach(element => {
          let arr = [];
          arr.push(element.month + ' ' + element.year);
          arr.push(element.Savings);
          result.push(arr);
        });
      }
      else {
        this.regionSpendState = "NO DATA"
      }
      return result;
    }
    catch(err) {
      console.log('err = ', err);
      this.regionSpendState = "NO DATA"
      return ['NO DATA', 0];
    }
  }
}
