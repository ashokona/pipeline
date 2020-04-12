import { Component, OnInit } from '@angular/core';
import { NavService } from '../shared/services/nav.service';

@Component({
  selector: 'cops-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isExpanded: Boolean;

  toggleSideNav() {
    this.isExpanded = !this.isExpanded;
    this.navService.toggleSideNav(this.isExpanded);
  }

  constructor(
    public navService: NavService
  ) {
    this.navService.isSideNavExpanded.subscribe(
      res => this.isExpanded = res,
      err => {}
    );
  }

  ngOnInit() {}

  // onContentClick(){
  //   if(this.isExpanded){
  //     this.isExpanded = !this.isExpanded;
  //     this.navService.toggleSideNav(this.isExpanded);
  //   }
  // }

}

