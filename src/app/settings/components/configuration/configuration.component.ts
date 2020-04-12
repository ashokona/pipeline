import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SettingsService } from '../../services/settings.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ConfigureAccountComponent } from './configure-account/configure-account.component';

@Component({
  selector: 'cops-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  account;
  groups: any;
  manageAccount: Boolean = false;
  isConfigure: Boolean = false;
  tableOptions = {
    tableTitle: 'Aws Accounts',
    isDisplaytitle: true,
    isRefresh: true,
    isDownload: true,
    isSelectable: true,
    isMultiSelect: true,
    isEditable: true,
    isDeletable: true,
  };
  isConfigured = true;

  tableData: any[];

  displayedColumns: any = {
    accountName: {
      displayName: 'Account Name',
    },
    AccountId: {
      displayName: 'Account Number',
    },
    provider: {
      displayName: 'Provider',
    },
    groupNames: {
      displayName: 'Groups',
    },
    stackVerified: {
      displayName: 'Configuration',
      type: 'boolean',
      actionable: true,
      actionOn: false,
      actionIcon: 'error_outline',
      ifTrue: 'Success',
      ifFalse: 'Failed'
    },
    createdAt: {
      displayName: 'Created At',
      type: 'date'
    },
    createdBy: {
      displayName: 'Added By',
    }
  };

  constructor(
    private settingsService: SettingsService,
    private toaster: ToastrService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getAccountsData();
    this.getGroupsData();
  }

  getAccountsData() {
    this.settingsService.loader.next(true);
    this.settingsService.getAccounts().subscribe(
      res => {
        if(res.data && res.data.length > 0) {
          this.isConfigured = true;
          this.tableData = res.data;
          this.settingsService.loader.next(false);
        } else {
          this.isConfigured = false;
        }
      },
      err => {
        this.settingsService.loader.next(false);
        console.log(err);
      }
    );
  }

  getGroupsData() {
    this.settingsService.getGroups().subscribe(
      res => {
        this.groups = res.data;
      },
      err => {
        console.log(err);
      }
    );
  }

  onAddNewAccount() {
    this.manageAccount = true;
  }

  onEditAccount(account) {
    this.manageAccount = true;
    this.account = account;
  }

  onRowSelected(selected) {
    console.log(selected);
  }

  onCloseFlyout(account) {
    if(!this.tableData) {
      this.tableData = []
    }
    this.manageAccount = false;
    this.account = null;
    this.isConfigure = false;
    if (account) {
      const index = this.tableData.findIndex(value => value._id === account._id);
      if (~index) {
        this.tableData[index] = account;
      } else {
        this.tableData = [...this.tableData, account];
      }
      this.isConfigured = true;
    }
  }

  onRefreshData(e) {
    this.getAccountsData();
  }

  onDeleteAccount(accounts) {
    if (this.tableData.length > 1 && this.tableData.length !== accounts.length) {
      this.settingsService.removeAccounts(accounts).subscribe(
        res => {
          console.log(res);
          this.tableData = this.tableData.filter((item) => accounts.indexOf(item) < 0);
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.toaster.warning('Cannot delete the default account', '');
    }
  }

  onConfigureAccount(account): void {
    this.account = account;
    this.manageAccount = true;
    this.isConfigure = true;
  }

  onActionClicked(e) {
    this.onAddNewAccount();
  }
}
