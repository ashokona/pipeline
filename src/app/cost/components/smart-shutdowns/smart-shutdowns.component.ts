import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tab } from '../../../shared/models/tabs';

@Component({
  selector: 'cops-smart-shutdowns',
  templateUrl: './smart-shutdowns.component.html',
  styleUrls: ['./smart-shutdowns.component.scss']
})
export class SmartShutdownsComponent implements OnInit {
  currentRoute: String;
  tabs: Tab[] = [
    {
      label: 'SMART SCHEDULES',
      route: 'schedules',
    },
    // {
    //   label: 'REPORTS',
    //   route: 'reports',
    // }
  ];
  selectedTabIndex: Number = 0;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    // this.currentRoute = this.router.url.split('/')[3];
    // this.selectedTabIndex = this.tabs.findIndex( tab => tab.route ===  this.currentRoute);
  }

  onTabChanged(tab: Tab) {
    this.router.navigate([`/cost/shutdowns/${tab.route}`]);
  }

}
