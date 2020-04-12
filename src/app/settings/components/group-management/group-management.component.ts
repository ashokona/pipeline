import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'cops-group-management',
  templateUrl: './group-management.component.html',
  styleUrls: ['./group-management.component.scss']
})
export class GroupManagementComponent implements OnInit {
  group;
  editOrAddGroup: Boolean = false;

  tableOptions = {
    tableTitle: 'Aws Accounts',
    isDisplaytitle: true,
    isRefresh: true,
    isDownload: true,
    isSelectable: true,
    isMultiSelect: true,
    isEditable: true,
    isDeletable: true
  };

  tableData: any[];

  displayedColumns: any = {
    groupName: {
      displayName: 'Name',
    },
    accountName: {
      displayName: 'Accounts',
    },
    createdBy: {
      displayName: 'Created By'
    }
  };

  constructor(
    private toastr: ToastrService,
    private settingsService: SettingsService,
  ) { }

  ngOnInit() {
    this.getGroupsData();
  }

  onRefreshGroups(e) {
    this.getGroupsData();
  }

  getGroupsData() {
    this.settingsService.loader.next(true);
    this.settingsService.getGroups().subscribe(
      res => {
        this.tableData = res.data;
        this.settingsService.loader.next(false);
        this.toggleDeleteIcon();
      },
      err => {
        console.log(err);
        this.settingsService.loader.next(false);
      }
    );
  }

  onAddNewGroup() {
    this.editOrAddGroup = true;
  }

  onEditAccount(group) {
    this.editOrAddGroup = true;
    this.group = group;
  }

  onCancelAccount(event) {
    this.editOrAddGroup = false;
    this.group = null;
  }

  onDeleteAccount(groups) {
    // console.log(groups);
    if (this.tableData.length >= groups.length) {
      this.settingsService.removeGroups(groups).subscribe(
        res => {
          // console.log(res);
          this.toastr.success(res.message, '', { timeOut: 3000 });
          this.tableData = this.tableData.filter((item) => groups.indexOf(item) < 0);
          this.refreshUserOnGrpEdit(groups)
          this.toggleDeleteIcon();
        },
        err => {
          console.log(err);
          this.toastr.error(err.error.message, '', { timeOut: 3000 });
        }
      );
    } else {
      this.toastr.warning('There must be atleast one group in the organization', '', { timeOut: 3000 });
    }
  }

  toggleDeleteIcon() {
    if (this.tableData.length > 1) {
      this.tableOptions = { ...this.tableOptions, isDeletable: true };
    } else {
      this.tableOptions = { ...this.tableOptions, isDeletable: false };
    }
  }

  updateTable(group) {
    if (group) {
      this.refreshUserOnGrpEdit([group]);
    }
    this.getGroupsData();
  }

  refreshUserOnGrpEdit(groups) {
    this.settingsService.refreshUserOnGrpEdit(groups).subscribe(() => {
      this.tableData = JSON.parse(JSON.stringify(this.tableData));
      this.tableOptions = JSON.parse(JSON.stringify(this.tableOptions));
      this.displayedColumns = JSON.parse(JSON.stringify(this.displayedColumns));
    });
  }
}
