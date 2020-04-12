import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NavService } from '../shared/services/nav.service';
import { SecurityService } from './services/security.service';
import { BroadcasterService } from '../shared/services/broadcaster.service';

@Component({
  selector: 'cops-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})

export class SecurityComponent implements OnInit, OnDestroy {
  title = 'security';
  parentRoute = 'security';
  securityTabs: any[];
  tabValues;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private navService: NavService,
    private securityService: SecurityService,
    private broadCaster: BroadcasterService
  ) { }

  ngOnInit() {
    this.getTabValues();
    this.broadCaster.onGroupChange().pipe(takeUntil(this.destroy$)).subscribe((payload) => {
      this.getTabValues();
    });
  }

  getTabValues() {
    this.securityService.getTabValues().subscribe(
      res => {
        this.tabValues = res.data;
        // console.log(this.tabValues);
        this.initSecurityTabs();
      },
      err => { }
    );
  }

  initSecurityTabs() {
    // console.log(this.tabValues)
    this.navService.navListItems.subscribe(
      res => {
        res.forEach(el => {
          if (el.route === this.title) {
            this.securityTabs = el.children;
          }
          // console.log(el)
        });
        this.securityTabs = this.securityTabs.filter((tab) => {
          // console.log(tab)
          return tab.route !== 'spends';
        });
        this.securityTabs.map(item => {
          // console.log(this.tabValues[item.route])
          item.value = (this.tabValues[item.route]) ? this.tabValues[item.route] : 0;
          // item.prefix = '$';
        });
      },
      err => { }
    );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
