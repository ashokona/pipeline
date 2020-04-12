import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { NavItem } from '../../shared/models/nav-item';
import { NavService } from '../../shared/services/nav.service';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'cops-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit, OnDestroy {
  @Output() toggleSideNav = new EventEmitter<any>();
  parentRoute: String = 'settings';
  settingstNavItems: NavItem[] = [
    {
      displayName: 'Cloud Account Configuration',
      iconName: 'settings_system_daydream',
      route: 'accounts',
      underDev: false
    },
    {
      displayName: 'Access Management',
      iconName: 'settings_applications',
      route: 'accessmanagment',
      underDev: false
    },
    {
      displayName: 'Group Management',
      iconName: 'group',
      route: 'groups',
      underDev: false
    }
    // ,
    // {
    //   displayName: 'Subscription Management',
    //   iconName: 'group',
    //   route: 'subscriptionManagement',
    //   underDev: false
    // }
  ];
  isExpanded: Boolean;
  currentUser: any;
  groupSelected: any;

  toggleSideNavMenu() {
    this.isExpanded = !this.isExpanded;
    this.navService.toggleSideNav(this.isExpanded);
  }

  constructor(
    private userService: UserService,
    private router: Router,
    private navService: NavService,
    private tokenService: TokenService,
  ) {
    this.navService.isSideNavExpanded.subscribe(
      res => this.isExpanded = res,
      err => { }
    );
    this.userService.currentUser.subscribe(
      user => {
        if (user) {
          this.currentUser = user;
          this.groupSelected = this.tokenService.getGroup();
          this.groupSelected = (this.currentUser.groups.find(grp => grp._id === this.groupSelected))
            ? this.groupSelected : this.currentUser.groups[0]._id;
          this.tokenService.setGroup(this.groupSelected);
        }
      }

    )
  }

  ngOnInit() {
    // this.settingstNavItems = this.navService.getChildRoutes(this.parentRoute);
    // this.initSettingsRoutes();
  }

  // initSettingsRoutes() {
  //   this.navService.navListItems.subscribe(
  //     res => {
  //       res.forEach(el => {
  //         if (el.route === this.parentRoute) {
  //           this.settingstNavItems = el.children;
  //         }
  //       });
  //     },
  //     err => { }
  //   );
  // }

  onGroupChange(group) {
    this.groupSelected = group.value;
    this.tokenService.setGroup(group.value);
  }

  onSettingsSelect(route) {
    this.router.navigate([`${this.parentRoute}/${route}`]);
  }

  ngOnDestroy() { }

  onSignout() {
    this.userService.signout();
  }
}
