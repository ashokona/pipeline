import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Tab } from '../../../shared/models/tabs';
import { ComputeService } from '../../services/compute.service';
import AWSRegions from '../../../shared/data/aws-regions';
import { InventoryService } from '../../services/inventory.service';
import { BroadcasterService } from 'src/app/shared/services/broadcaster.service';

@Component({
  selector: 'cops-iam',
  templateUrl: './iam.component.html',
  styleUrls: ['./iam.component.scss']
})
export class IamComponent implements OnInit {
  isLoading = true;
  currentRoute = 'IamUsers';
  columnsData;
  iamData: any;
  data: any;
  tabs: any[] = [
    {
      label: 'Users',
      route: 'IamUsers',
      columnsData: {
        UserName: {},
        // UserId: {},
        PasswordLastUsed: {},
        AccountId: {},
        MFA: {},
        PasswordRotation: {},
        ConsoleAccess: {},
        AccessKeys: {},
        Actions: [
          { columnId: 'security', icon: 'security', name: "Security"}
        ]
      }
    }
  ];
  selectedTabIndex: Number;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private router: Router,
    private inventoryService: InventoryService,
    private broadCaster: BroadcasterService
  ) { }

  ngOnInit() {
    this.initIamData();
    this.broadCaster.onGroupChange().pipe(takeUntil(this.destroy$)).subscribe((payload) => {
      this.initIamData();
    });
  }

  initIamData() {
    this.isLoading = true;
    const params = {
      resource: this.currentRoute
    }
    this.inventoryService.getInventoryData(params).subscribe(
      res => {
        this.iamData = res.data;
        this.columnsData = this.tabs[0].columnsData;
        this.data = this.iamData;
        this.data.map(item => {
          item.MFA = item.mfa_active;
          item.PasswordRotation = item.password_next_rotation;
          item.ConsoleAccess = item.password_enabled;
          item.AccessKeys = item.mfa_active;
        })
        this.isLoading = false;
      },
      err => {
        console.log(err);
        this.isLoading = false;
      }
    )
  }

  onTabChanged(tab: any) {
    this.setTab(tab)
  }

  setTab(tab) {
    this.currentRoute = tab.route;
    this.columnsData = tab.columnsData;
    this.data = this.iamData[this.currentRoute];
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
