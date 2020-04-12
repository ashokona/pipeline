import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CostService } from '../../services/cost.service';
import { BroadcasterService } from '../../../shared/services/broadcaster.service';
import { CostDashboardService } from '../../services/cost-dashboard.service';

@Component({
  selector: 'cops-unused-resources',
  templateUrl: './unused-resources.component.html',
  styleUrls: ['./unused-resources.component.scss']
})
export class UnusedResourcesComponent implements OnInit, OnDestroy {
  selectedResorceType: String = 'all';
  totalPrice = 0;
  totalCount;
  unusedResources: any[];
  resources: any[];
  volumes: any[];
  elbs: any[];
  eips: any[];
  resourceData = {
    account_id: 'test-123'
  };
  tableOptions = {
    tableTitle: 'Unused',
    isDisplaytitle: true,
    isRefresh: true,
    isDownload: true,
    isSelectable: true,
    isMultiSelect: true,
    isDeletable: true,
    excelName: 'unused_resources'
  };

  displayedColumns: any = {
    AccountId: {
      displayName: 'Account ID',
    },
    VolumeId: {
      displayName: 'Resource ID',
    },
    Region: {
      displayName: 'Region',
    },
    State: {
      displayName: 'Services',
    },
    Price: {
      displayName: 'Price Per Month ($)',
    }
  };
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private costService: CostService,
    private broadCaster: BroadcasterService,
    private readonly costDashboardService: CostDashboardService
  ) {
  }

  ngOnInit() {
    this.initVolumes();
    this.broadCaster.onGroupChange().pipe(takeUntil(this.destroy$)).subscribe((payload) => {
      this.initVolumes();
    });
  }

  initVolumes() {
    // this.costService.loader.next(true);
    this.costService.getVolumes().subscribe(
      res => {
        this.costService.loader.next(false);
        this.costDashboardService.setSavings();
        this.unusedResources = res.data;
        // console.log(this.unusedResources)
        this.resources = res.data;
        this.volumes = this.unusedResources.filter(resource => resource.type === 'Volumes');
        this.elbs = this.unusedResources.filter(resource => resource.type === 'ELB');
        this.eips = this.unusedResources.filter(resource => resource.type === 'eip');
        this.totalPrice = this.unusedResources.length > 0 ?
          this.unusedResources.map(res => res.Price || 0).reduce((a, b) => a + b).toFixed(2) : 0;
        // console.log(this.totalPrice)
        this.initData();
      },
      err => {
        console.log(err);
        this.unusedResources = [];
        this.costDashboardService.setSavings();
        this.costService.loader.next(false);
      }
    )
  }

  initData() {
    this.resources = this.unusedResources;
    this.volumes = this.unusedResources.filter(resource => resource.type === 'Volumes');
    this.elbs = this.unusedResources.filter(resource => resource.type === 'ELB');
    this.eips = this.unusedResources.filter(resource => resource.type === 'eip');
    if (this.unusedResources.length) {
      this.totalPrice = this.unusedResources.map(res => res.Price || 0).reduce((a, b) => a + b).toFixed(2);
    } else {
      this.totalPrice = 0;
    }
  }
  fetchUnusedResources() {
    const path = 'get-unused-resources';
    this.costService.getUnusedResources(path, this.resourceData).subscribe(
      res => {
        this.unusedResources = res.Message;
        // this.tableData = this.unusedResources[this.selectedResorceType];
        const data: any[] = Object.values(res.Message);
        this.totalPrice = data.map(n => (n.map(j => j.PricePerMonth).reduce((f, l) => f + l))).reduce((o, b) => o + b);
        this.totalCount = [].concat.apply([], Object.values(this.unusedResources)).length;
        this.onResourceToggle(this.selectedResorceType);
      },
      err => {
        console.log(err);
      }
    );
  }
  onResourceToggle(type) {
    if (type === 'all') {
      // this.unusedResources = [].concat.apply([], Object.values(this.unusedResources));
      this.unusedResources = this.resources;
    } else if (type === 'Volumes') {
      this.unusedResources = this.volumes;
    } else if (type === 'elb') {
      this.unusedResources = this.elbs;
    } else if (type === 'eip') {
      this.unusedResources = [...this.eips];
    }
    // this.tableData = this.unusedResources[this.selectedResorceType];
    // const filteredData = this.resources.filter(resource => resource.ResourceType === type);
    // this.unusedResources = filteredData;
  }

  onRefreshVolumes() {
    this.initVolumes();
  }

  onDelteData(e) {
    var data = e;
    this.costService.deleteUnusedVolumes(data).subscribe(
      res => {
        console.log(res.Status);
        e.map(each => {
          // console.log(each);
          this.unusedResources.splice(this.unusedResources.findIndex(resource => resource['VolumeId'] === each['VolumeId']), 1);
          this.unusedResources = this.unusedResources.filter(resource => resource);
          this.initData();
          this.costDashboardService.updateSavings('unusedresources', each['Price']);
        })
      },
      err => {
        console.log(err);
      }
    )
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
