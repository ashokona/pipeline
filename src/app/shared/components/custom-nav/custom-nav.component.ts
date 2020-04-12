import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { NavItem } from '../../models/nav-item';
import { NavService } from '../../services/nav.service';
import { CustomNavItem } from '../../models/custom-nav-item';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'cops-custom-nav',
  templateUrl: './custom-nav.component.html',
  styleUrls: ['./custom-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomNavComponent implements OnInit {
  @Input() title: string;
  @Input() tabs: any[];
  @Input() route: string;
  // customNavItems: CustomNavItem[];
  costNavItems: CustomNavItem[];

  constructor(
    public router: Router,
    private navService: NavService
  ) { }

  ngOnInit() {

  }

  onNavItem(childRoute) {
    const route = `${this.title}/${childRoute}`;
    this.router.navigate([route]);
  }
}
