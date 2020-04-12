import { TestBed } from '@angular/core/testing';

import { GoogleChartBaseService } from './google-chart-base.service';
import { GoogleChartService } from './google-chart.service';
import { Observable } from 'rxjs';

describe('GoogleChartBaseService', () => {
  let dataSentToGoogleChartDrawMethod: [[], {}];

  window['google'] = {
    charts: {
      load: function(): void {},
      setOnLoadCallback: function(callback: Function): Observable<any> {
        return Observable.create();
      },
    },
    visualization: {
      arrayToDataTable: function(data: string[][]): string[][] {
        return data;
      },
      LineChart: class {
        dataReceived: any;
        constructor(data: string[][]) {
          this.dataReceived = data;
        }
        draw = function(data: any, options: {}) {
          dataSentToGoogleChartDrawMethod = [data, options];
        };
      },
    },
  };
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ GoogleChartBaseService, {provide: GoogleChartService, google: GoogleChartService}, ]
  }));

  it('should be created', () => {
    const service: GoogleChartBaseService = TestBed.get(GoogleChartBaseService);
    expect(service).toBeTruthy();
  });
});
