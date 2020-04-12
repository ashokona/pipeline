import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'cops-backup',
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.scss']
})
export class BackupComponent implements OnInit {

  isConfing: Boolean = false;
  columnChartData: any[];
  columnChartConfig: any;
  columnChartElementId: String;


  columnChartData2: any[];
  columnChartConfig2: any;
  columnChartElementId2: String;

  calendarEvents = [
    { title: 'event 1', date: '2019-09-01' },
    { title: 'event 2', date: '2019-09-05' },
    { title: 'event 3', date: '2019-09-09' },
    { title: 'event 4', date: '2019-09-17' },
  ];

  calendarPlugins = [dayGridPlugin];

  tabs: any[] = [
    {
      label: 'DETAILED REPORT',
      route: 'detailedreport',
    },
    {
      label: 'CONFIG',
      route: 'config',
    },
  ];
  selectedTabIndex: Number;
  constructor() { }

  ngOnInit() {
    this.initBarGraph();
  }
  initBarGraph() {
    this.columnChartData = [
      ['EC2', 'RDS', { role: 'annotation' }],
      ['EC2', 10, 24],
      ['RDS', 16, 23]
    ];

    this.columnChartConfig = {
      legend: { position: 'right', maxLines: 3 },
      bar: { groupWidth: '75%' },
      isStacked: true,
    };
    this.columnChartElementId = 'cost-column-chart';

    this.columnChartData2 = [
      ['EC2', 'RDS', { role: 'annotation' }],
      ['EC2', 10, 24],
      ['RDS', 16, 23]
    ];

    this.columnChartConfig2 = {
      legend: { position: 'right', maxLines: 3 },
      bar: { groupWidth: '75%' },
      isStacked: true,
    };
    this.columnChartElementId2 = 'cost-column-chart2';
  }

  // // config() {
  // //   this.isConfing = true;
  // // }

  // detailedReport() {

  // }

  onTabChanged(tab: any) {
    console.log(tab);
    this.selectedTabIndex = this.tabs.findIndex(i => i.route === tab.route);
    if(this.selectedTabIndex) {
      this.isConfing = true
    } else {
      this.isConfing = false
    }
  }
}
