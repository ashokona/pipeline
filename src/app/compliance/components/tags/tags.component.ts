import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cops-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  isLoading = true;
  currentRoute = 'tagScan';
  resourceTypes = ['ec2'];
  resourceType;
  tabs: any[] = [
    {
      label: 'TAG SCAN REPORT',
      route: 'tagScan',
    },
    {
      label: 'CONFIG',
      route: 'tagConfig',
    }
  ];
  constructor(
  ) { }

  ngOnInit() {
    this.initData();
    this.resourceType = this.resourceTypes[0];
  }

  initData() {
    this.isLoading = false;
  }

  onTabChanged(tab: any) {
    this.setTab(tab)
  }

  setTab(tab) {
    this.currentRoute = tab.route;
  }

}
