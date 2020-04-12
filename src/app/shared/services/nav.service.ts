import {EventEmitter, Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import NavList from '../data/nav-list';

@Injectable({
  providedIn: 'root'
})

export class NavService {
  public appDrawer: any;
  isSideNavExpanded = new BehaviorSubject(false);
  navListItems = new BehaviorSubject(NavList);

  constructor() {}

  public setNavItems(items) {
    this.navListItems.next(items);
  }

  public toggleSideNav(value) {
    this.isSideNavExpanded.next(value);
  }

  public closeNav() {
    this.appDrawer.close();
  }

  public openNav() {
    this.appDrawer.open();
  }

  public getChildRoutes(parentRoute) {
    let childRoutes = [];
    this.navListItems.forEach(el => {
      if (el.route === parentRoute) {
        childRoutes = el.children;
      }
    });
    return childRoutes;
  }

}
