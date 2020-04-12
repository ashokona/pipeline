import { GoogleChartBaseService } from './google-chart-base.service';
import { Injectable, NgZone } from '@angular/core';
// import { PieChartConfig } from './../Models/PieChartConfig';

declare var google: any;

@Injectable({
  providedIn: 'root'
})

export class GoogleChartService extends GoogleChartBaseService  {

  constructor(
    ngZone: NgZone
  ) { super(ngZone); }

  public buildPieChart(elementId: String, data: any[], config: any): void {
    const chartFunc = () => new google.visualization.PieChart(document.getElementById(<string>elementId));
    const options = config;
    this.buildChart(data, chartFunc, options);
  }

  public buildTreemapChart(elementId: String, data: any[], config: any): void {
    const chartFunc = () => new google.visualization.TreeMap(document.getElementById(<string>elementId));
    const options = {
      minColor: '#f00',
      midColor: '#ddd',
      maxColor: '#0d0',
      headerHeight: 15,
      fontColor: 'black',
      showScale: true
    };
    this.buildChart(data, chartFunc, options);
  }

  public buildGeoChart(elementId: String, data: any[], config: any): void {
    const chartFunc = () => new google.visualization.GeoChart(document.getElementById(<string>elementId));
    const options = config;
    this.buildChart(data, chartFunc, options);
  }

  public buildLineChart(elementId: String, data: any[], config: any): void {
    const chartFunc = () => new google.visualization.LineChart(document.getElementById(<string>elementId));
    const options = config;
    this.buildChart(data, chartFunc, options);
  }

  public buildAreaChart(elementId: String, data: any[], config: any): void {
    const chartFunc = () => new google.visualization.AreaChart(document.getElementById(<string>elementId));
    const options = config;
    this.buildChart(data, chartFunc, options);
  }

  public buildColumnChart(elementId: String, data: any[], config: any): void {
    const chartFunc = () => new google.visualization.ColumnChart(document.getElementById(<string>elementId));
    const options = config;
    this.buildChart(data, chartFunc, options);
  }

  public buildBarChart(elementId: String, data: any[], config: any): void {
    const chartFunc = () => new google.visualization.BarChart(document.getElementById(<string>elementId));
    const options = config;
    this.buildChart(data, chartFunc, options);
  }
}
