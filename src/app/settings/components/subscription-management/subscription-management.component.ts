import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/services/user.service';
import { SubscriptionModel } from '../../models/subscritption';

@Component({
  selector: 'cops-subscription-management',
  templateUrl: './subscription-management.component.html',
  styleUrls: ['./subscription-management.component.scss']
})
export class SubscriptionManagementComponent implements OnInit {
  subscription: SubscriptionModel;
  editSubscription: Boolean = false;

  tableOptions = {
    tableTitle: 'User Subscription',
    isDisplaytitle: true,
    isRefresh: true,
    isDownload: true,
    isSelectable: true,
    isMultiSelect: true,
    isEditable: true,
    isDeletable: false
  };

  tableData: any[];

  displayedColumns: any = {
    subscriptionId: {
      displayName: 'SubscriptionId',
    },
    licenceType: {
      displayName: 'LicenceType',
    }
  };

  constructor(
    private toastr: ToastrService,
    private settingsService: SettingsService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getSubscriptionData();
  }

  onRefreshGroups() {
    this.getSubscriptionData();
  }

  getSubscriptionData() {
    if (this.userService.updatedUser && this.userService.updatedUser.subscription) {
      this.tableData = [this.userService.updatedUser.subscription];
    }
  }


  onEditSubscription(subscription) {
    this.editSubscription = true;
    this.subscription = subscription;
  }

  onCancelEdit() {
    this.editSubscription = false;
    this.subscription = null;
  }

  updateTable(subscription) {
    if (subscription) {
      this.userService.updatedUser.subscription = subscription;
      this.onRefreshGroups();
    }
  }
}
