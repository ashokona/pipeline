import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { NavService } from '../../shared/services/nav.service';
import { NavItem } from '../../shared/models/nav-item';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user';
@Component({
  selector: 'cops-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  navItems: NavItem[] = [];
  isExpanded: Boolean = false;
  currentUser: User;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private navService: NavService,
    private userService: UserService,
  ) {
    // if (this.depth === undefined) {
    //   this.depth = 0;
    // }
    this.navService.navListItems.subscribe(
      res => { this.navItems = res; },
      err => { this.navItems = []; }
    );
    this.navService.isSideNavExpanded.subscribe(
      res => this.isExpanded = res,
      err => {}
    );
    this.userService.currentUser.subscribe(
      res => {
        this.currentUser = res;
      }
    )
  }

  ngOnInit() {
    // this.getServices();
  }
  toggleSideNavMenu() {
    this.isExpanded = !this.isExpanded;
    this.navService.toggleSideNav(this.isExpanded);
  }
  // getServices() {
  //   let path = `/cops/api/v1/service`;
  //   this.apiService.get(path)
  //     .subscribe(
  //       res => {
  //       },
  //       err => {
  //         console.log(err)
  //       }
  //     )
  // }

  // getNavItems(services) {
  //   let group_to_values = services.reduce(function (obj, item) {
  //     obj[item.category] = obj[item.category] || [];
  //     obj[item.category].push({ route: item.name, displayName: item.name });
  //     return obj;
  //   }, {});

  //   let groups = Object.keys(group_to_values).map(function (key) {
  //     return {
  //       displayName: key,
  //       route: key,
  //       children: group_to_values[key]
  //     };
  //   });
  //   return groups
  // }
  onSignout() {
    this.userService.signout();
  }
}
