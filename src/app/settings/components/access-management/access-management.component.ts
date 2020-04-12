import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'cops-access-management',
  templateUrl: './access-management.component.html',
  styleUrls: ['./access-management.component.scss']
})
export class AccessManagementComponent implements OnInit {
  user: any;
  groups: any;
  manageUser: Boolean = false;

  tableOptions = {
    tableTitle: 'Users',
    isDisplaytitle: true,
    isRefresh: true,
    isDownload: true,
    isSelectable: true,
    isMultiSelect: true,
    isEditable: true,
    isDeletable: true
  };

  usersData: any[];

  displayedColumns: any = {
    email: {
      displayName: 'Email',
    },
    role: {
      displayName: 'Role',
    },
    groupNames: {
      displayName: 'Groups',
    },
  };

  constructor(
    private settingsService: SettingsService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getUsersData();
    this.getGroupsData();
  }

  getUsersData() {
    // this.settingsService.loader.next(true);
    this.settingsService.getUsers().subscribe(
      res => {
        this.usersData = res.data;
        // this.settingsService.loader.next(false);
      },
      err => {
        console.log(err);
        // this.settingsService.loader.next(false);
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

  onNewUser() {
    this.manageUser = true;
  }

  onEditUser(user) {
    this.manageUser = true;
    this.user = user;
  }

  onCancelUser(user) {
    this.manageUser = false;
    this.user = null;
    if (user) {
      const index = this.usersData.findIndex(value => value._id === user._id);
      if (~index) {
        this.usersData[index] = user;
      } else {
        this.usersData = [...this.usersData, user];
      }
      // this.settingsService.refreshUser(user).subscribe(() => {
      //   this.usersData = JSON.parse(JSON.stringify(this.usersData));
      //   this.tableOptions = JSON.parse(JSON.stringify(this.tableOptions));
      //   this.displayedColumns = JSON.parse(JSON.stringify(this.displayedColumns));
      // }
      // );
    }
  }

  onRefreshUsers(e) {
    this.getUsersData();
  }

  onDeleteUser(user) {
    console.log(user);
    this.settingsService.removeUsers(user).subscribe(
      res => {
        console.log(res);
        this.toastr.success(res.message, '');
        this.usersData = this.usersData.filter((item) => user.indexOf(item) < 0);
      },
      err => {
        console.log(err);
        this.toastr.error(err.error.message, '');
      }
    );
  }
}
