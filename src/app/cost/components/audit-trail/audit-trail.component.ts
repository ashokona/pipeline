import { Component, OnInit } from '@angular/core';
import { CostService } from '../../services/cost.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cops-audit-trail',
  templateUrl: './audit-trail.component.html',
  styleUrls: ['./audit-trail.component.scss']
})
export class AuditTrailComponent implements OnInit {
  selectedResorceType: String = 'unusedResources';
  selectedResourceType = new FormControl('');
  totalPrice = 0;
  totalCount;
  resourceData = {
    account_id: 'test-123'
  };
  unusedResources: any;
  tableOptions = {
    tableTitle: 'Unused',
    isDisplaytitle: true,
    isRefresh: true,
    isDownload: true,
    isSelectable: false,
    isMultiSelect: false,
    isDeletable: false
  };
  tableData: any[];
  displayedColumns: any = {
    AccountID: {
      displayName: 'Account ID',
    },
    ResourceID: {
      displayName: 'Resource ID',
    },
    Region: {
      displayName: 'Region',
    },
    Category: {
      displayName: 'Category',
    },
    PricePerMonth: {
      displayName: 'Price Per Month',
    },
    actionDate: {
      displayName: 'Action Performed On',
      type: 'date'
    },
    user: {
      displayName: 'Performed By'
    }
  };

  constructor(
    private costService: CostService
  ) { }

  ngOnInit() {
    this.fetchUnusedResources();
  }

  fetchUnusedResources() {
    const path = 'get-unused-resources';
    this.costService.getUnusedResources(path, this.resourceData).subscribe(
      res => {
        this.unusedResources = res.Message;
        // this.tableData = this.unusedResources[this.selectedResorceType];
        const data: any[] = Object.values(res.Message);
        this.totalPrice = data.map(n => (n.map(j => j.PricePerMonth).reduce((f, l) => f + l) )).reduce((o, b) => o + b);
        this.totalCount = [].concat.apply([], Object.values(this.unusedResources)).length;
        this.onResourceToggle(this.selectedResorceType);
      },
      err => {
        console.log(err);
      }
    );
  }
  onResourceToggle(type) {
    if (type === 'unusedResources') {
      this.tableData = [].concat.apply([], Object.values(this.unusedResources));
      this.tableData.forEach( item => {
        item.actionDate = new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
        item.user = `copsuser${Math.floor(Math.random() * 100)}@cloudcops.io`;
      });
    } else {
      this.tableData = [];
    }
  }

  onRefreshData() {
    console.log('refresh data');
  }
  onDelteData(e) {
    console.log(e);
  }
}
