import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NavItem } from '../../shared/models/nav-item';
import { NavService } from '../../shared/services/nav.service';

@Component({
  selector: 'cops-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class MenuListItemComponent {
  currentRoute: String = 'dashboard';
  expanded: boolean;
  expandSideNav: Boolean = false;
  navItems: NavItem[] = [];
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NavItem;
  @Input() depth: number;

  constructor(
    public navService: NavService,
    public router: Router
  ) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
    this.navService.isSideNavExpanded.subscribe(
      data => {
        this.expandSideNav = data;
      },
      err => console.log(err)
    );
    this.navService.navListItems.subscribe(
      data => {
        this.navItems = data;
      },
      err => console.log(err)
    );
    // this.router.events.subscribe((val) => {
    //   if(val instanceof NavigationEnd){
    //     this.currentRoute = this.router.url.split('/')[1];
    //   }
    // })
  }

  onItemSelected(item: NavItem) {
    const navItems = this.navItems.map(i => i);
    if (!item.children || !item.children.length) {
      const parentRoute = navItems.filter( navItem => {
        if (navItem.children && navItem.children.length) {
          const tempNavItem = navItem.children.filter( child => {
              return child === item;
          });
          if (tempNavItem.length) {
            return tempNavItem;
          }
        }
      });
      const route = parentRoute.length > 0 ? `${parentRoute[0].route}/${item.route}` : item.route;
      if (!item.underDev) {
        this.router.navigate([route]);
      }
    }
    if (item.children && item.children.length) {
      if (this.expandSideNav) {
        this.expanded = !this.expanded;
        // this.router.navigate([item.route]);
        // this.navService.toggleSideNav(true);
      } else if (!item.underDev) {
        this.router.navigate([item.route]);
      }
    }
  }

  isActive() {
    return (this.item && this.item.route) ?
    this.router.url.split('/')[1].includes(this.item.route)
    : false;
  }
}
