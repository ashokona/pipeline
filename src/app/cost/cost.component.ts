import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Cost } from './models/cost.model';
import { CostService } from './services/cost.service';
import { NavService } from '../shared/services/nav.service';
import { CostDashboardService } from './services/cost-dashboard.service';
import { DashboardService } from '../home/services/dashboard.service';
import { BroadcasterService } from '../shared/services/broadcaster.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'cops-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.scss']
})
export class CostComponent implements OnInit, OnDestroy {
  title = 'cost';
  parentRoute = 'spends';
  costTabs: any[];
  rowCardItemData = [
    {
      name: 'Unused Resources',
      icon: 'thumbs_up_down',
      color: 'warn',
      value: 234
    },
    {
      name: 'Smart Schedules',
      icon: 'wb_incandescent',
      color: 'success',
      value: 234
    },
    {
      name: 'Right Sizing Savings',
      icon: 'enhanced_encryption',
      color: 'success',
      value: 234
    },
    {
      name: 'Savings from RIs',
      icon: 'bookmark_border',
      color: 'warn',
      value: 234
    }
  ];
  costModel: Cost;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private cdr: ChangeDetectorRef,
    private costService: CostService,
    private navService: NavService,
    private readonly costDashboardService: CostDashboardService,
    private readonly dashboardService: DashboardService,
    private broadCaster: BroadcasterService
  ) {
    this.costModel = new Cost();
    this.costService.loader.pipe(takeUntil(this.destroy$)).subscribe(value => {
      this.costModel.gridLoading = value;
      this.cdr.detectChanges();
    });
  }

  ngOnInit() {
    this.getSavings();
    this.listenSavings();
    this.broadCaster.onGroupChange().pipe(takeUntil(this.destroy$)).subscribe((payload) => {
      this.getSavings();
    });
  }

  getSavings() {
    this.dashboardService.getSavings().subscribe(res => {
      this.costModel.savings = res.data;
      this.costDashboardService.setSavings();
      this.initializeItems();
    }, err => {
      this.initializeItems();
    })
  }

  listenSavings() {
    this.costDashboardService.savings.subscribe(res => {
      // console.log(res);
      this.costModel.savings = res;
      this.initializeItems();
    })
  }

  initializeItems() {
    this.navService.navListItems.subscribe(
      res => {
        res.forEach(el => {
          if (el.route === this.title) {
            this.costTabs = el.children;
          }
        });
        // this.costTabs = this.costTabs.filter((tab) => {
        //   return tab.route !== 'spends';
        // });
        this.costTabs.map(item => {
          item.value = this.costModel.savings[item.route] ? this.costModel.savings[item.route] : 0;
          item.prefix = '$';
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
