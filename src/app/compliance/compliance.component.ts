import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, NavigationEnd } from '@angular/router';
import { NavService } from '../shared/services/nav.service';

@Component({
  selector: 'cops-compliance',
  templateUrl: './compliance.component.html',
  styleUrls: ['./compliance.component.scss']
})
export class ComplianceComponent implements OnInit {
  // module: String = 'compliance';
  // public selectedTabIndex = 0;
  // rowCardItemData = [
  //   {
  //     name: 'Tags',
  //     icon: 'bookmark_border',
  //     color: 'warn',
  //     value: 234
  //   },
  //   {
  //     name: 'Encryption',
  //     icon: 'enhanced_encryption',
  //     color: 'success',
  //     value: 234
  //   },
  //   {
  //     name: 'Access Review',
  //     icon: 'thumbs_up_down',
  //     color: 'warn',
  //     value: 234
  //   },
  //   {
  //     name: 'Audit Score',
  //     icon: 'wb_incandescent',
  //     color: 'success',
  //     value: 234
  //   }
  // ];

  title = 'compliance';
  complianceTabs = [];
  constructor(
    private navService: NavService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initializeNavItems();
  }

  initializeNavItems() {
    this.navService.navListItems.subscribe(
      res => {
        res.forEach(el => {
          if (el.route === this.title) {
            this.complianceTabs = el.children;
          }
        });
      },
      err => { }
    );
  }

  onNavItemChanged(navItem) {
    const route = `${this.title}/${navItem}`;
    this.router.navigate([route]);
  }

}
