import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleChartService } from '../google-chart.service';
import { GoogleChartComponent } from './google-chart.component';
import { Observable } from 'rxjs';

describe('GoogleChartComponent', () => {
  let component: GoogleChartComponent;
  let fixture: ComponentFixture<GoogleChartComponent>;
  let dataSentToGoogleChartDrawMethod: [[], {}];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleChartComponent ],
      providers: [ GoogleChartService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleChartComponent);
    component = fixture.componentInstance;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
