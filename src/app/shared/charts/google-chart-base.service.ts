import { Injectable, NgZone } from '@angular/core';
declare var google: any;

@Injectable({
  providedIn: 'root'
})

export class GoogleChartBaseService {
  constructor(
    private ngZone: NgZone
  ) {
    // google.charts.load('current', {'packages':['corechart']});
    google.charts.load('current', {
      'packages': ['corechart', 'treemap', 'geochart'],
      'mapsApiKey': 'AIzaSyByYl600ofo-FMdVX6GDBgG4NICssrpg5E'
      // 'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
    });
  }

  protected buildChart(data: any[], chartFunc: any, options: any): void {
    const func = (chartFunction, chartOptions) => {
      const datatable = google.visualization.arrayToDataTable(data);
      const chart = chartFunction();
      google.visualization.events.addListener(
        chart, 'select', () => {
          this.ngZone.run(() => {
            // console.log(chart.getSelection());
          });
        }
      );
      chart.draw(datatable, chartOptions);
    };
    const callback = () => func(chartFunc, options);
    google.charts.setOnLoadCallback(callback);
  }
}
