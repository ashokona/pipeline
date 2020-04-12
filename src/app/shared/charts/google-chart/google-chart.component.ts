import { Component, Input, OnInit, HostListener } from '@angular/core';

import { GoogleChartService } from '../google-chart.service';

@Component({
  selector: 'cops-google-chart',
  templateUrl: './google-chart.component.html',
  styleUrls: ['./google-chart.component.scss']
})
export class GoogleChartComponent implements OnInit {

  @Input() data: any[];
  @Input() config: any;
  @Input() elementId: String;
  @Input() chartType: String;

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.onDrawChart();
  }
  constructor(
    private googleChartService: GoogleChartService,
  ) { }

  ngOnInit(): void {
    this.onDrawChart();
  }

  onDrawChart() {
    switch (this.chartType) {
      case 'area': {
        this.googleChartService.buildAreaChart(this.elementId, this.data, this.config);
        break;
      }
      case 'column': {
        this.googleChartService.buildColumnChart(this.elementId, this.data, this.config);
        break;
      }
      case 'geo': {
        this.googleChartService.buildGeoChart(this.elementId, this.data, this.config);
        break;
      }
      case 'line': {
        this.googleChartService.buildLineChart(this.elementId, this.data, this.config);
        break;
      }
      case 'pie': {
        this.googleChartService.buildPieChart(this.elementId, this.data, this.config);
        break;
      }
      case 'treemap': {
        this.googleChartService.buildTreemapChart(this.elementId, this.data, this.config);
        break;
      }
      case 'bar': {
        this.googleChartService.buildBarChart(this.elementId, this.data, this.config);
        break;
      }
    }
  }
}

