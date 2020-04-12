import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { InventoryService } from './services/inventory.service';
import { NavService } from '../shared/services/nav.service';
import { VisualizationComponent } from './components/visualization/visualization.component';
import { GoogleAnalyticsService } from '../shared/services/google-analytics.service';
import AWSRegions from '../shared/data/aws-regions';
import { BroadcasterService } from '../shared/services/broadcaster.service';

@Component({
  selector: 'cops-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  title = 'inventory';
  inventoryTabs = [];
  visData: any;
  regions;
  destroy$: Subject<boolean> = new Subject<boolean>();
  // custom = {icon : 'visibility', name: 'Vizuiliase'}
  constructor(
    private navService: NavService,
    private inventoryService: InventoryService,
    private broadCaster: BroadcasterService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    public googleAnalyticsService: GoogleAnalyticsService
  ) { }

  ngOnInit() {
    this.initializeNavItems();
    this.initResourcesCount();
    this.broadCaster.onGroupChange().pipe(takeUntil(this.destroy$)).subscribe((payload) => {
      this.initResourcesCount();
    });
  }

  openCloudView() {
    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      if (params['cloudView']) {
          this.onVisualization();
      }
    });
  }

  initializeNavItems() {
    this.navService.navListItems.subscribe(
      res => {
        res.forEach(el => {
          if (el.route === this.title) {
            this.inventoryTabs = el.children;
          }
        });
      },
      err => { }
    );
  }

  initResourcesCount() {
    this.regions = null;
    this.inventoryService.getResourcesCount().subscribe(
      res => {
        const resourcesCountByRegion = res.data;
        let regionCountMap = [];
        const resourcesToCount = ['Vpcs', 'Subnets', 'Instances', 'LoadBalancers', 'ClassicBalancers']
        AWSRegions.map(r => {
          // let values = Object.values(resourcesCountByRegion[r]);
          let values = resourcesToCount.map(resource => resourcesCountByRegion[r][resource]);
          regionCountMap.push(
            {
              region: r,
              count: values.reduce((a: any, b: any) => a + b, 0)
            }
          )
        });
        this.regions = regionCountMap;
        this.openCloudView();
      },
      err => { }
    )
  }

  onNavItemChanged(navItem) {
    if (navItem === 'cloudview') {
      this.openDialog();
      return;
    }
    const route = `${this.title}/${navItem}`;
    this.router.navigate([route]);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(VisualizationComponent, {
      panelClass: 'visualization-dialog-container',
      height: '98%',
      width: '98%',
      maxWidth: '100vw',
      data: {
        regions: this.regions
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  onVisualization() {
    this.openDialog();
    this.googleAnalyticsService.eventEmitter("Inventory", "Cloud View", "Open", 1);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
