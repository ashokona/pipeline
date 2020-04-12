import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Subject } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  loader: Subject<boolean> = new Subject<boolean>();

  constructor(private apiService: ApiService, private userService: UserService) { }

  getAccounts() {
    const path = 'configure/accounts';
    return this.apiService.get(path);
  }

  addAccount(data) {
    const path = 'configure/accounts';
    return this.apiService.post(path, data);
  }

  removeAccounts(data) {
    const path = 'configure/accounts/delete';
    return this.apiService.post(path, data);
  }

  updateAccount(data) {
    const path = 'configure/accounts';
    return this.apiService.patch(path, data);
  }

  getUsers() {
    const path = 'configure/users';
    return this.apiService.get(path);
  }

  addUser(data) {
    const path = 'configure/users';
    return this.apiService.post(path, data);
  }

  removeUsers(data) {
    const path = 'configure/users/delete';
    return this.apiService.post(path, data);
  }

  updateUser(data) {
    const path = 'configure/users';
    return this.apiService.patch(path, data);
  }

  refreshUser(updatedUser) {
    if (this.userService.updatedUser.email === updatedUser.email) {
      return this.userService.refreshToken().pipe(take(1));
    }
  }

  refreshUserOnGrpEdit(groups) {
    console.log(groups);
    console.log(this.userService.updatedUser)
    const userGrps = [];
    groups.forEach(grp => {
      const existingGrp = this.userService.updatedUser.groups.find(userGrp => userGrp._id === grp._id);
      if (existingGrp)
        userGrps.push(existingGrp);
    })
    if (userGrps.length) {
      return this.userService.refreshToken().pipe(take(1));
    }
  }

  getGroups() {
    const path = 'configure/groups';
    return this.apiService.get(path);
  }

  addGroup(data) {
    const path = 'configure/groups';
    return this.apiService.post(path, data);
  }

  updateGroup(data) {
    const path = 'configure/groups/update';
    return this.apiService.post(path, data);
  }

  getTags() {
    const path = 'configure/tags';
    return this.apiService.get(path);
  }

  addTag(data) {
    const path = 'configure/tags';
    return this.apiService.post(path, data);
  }

  updateTag(data) {
    const path = 'configure/tags/update';
    return this.apiService.post(path, data);
  }

  removeTags(data) {
    const path = 'configure/tags/delete';
    return this.apiService.post(path, data);
  }

  pollResources(data) {
    const path = "data/pollResources";
    return this.apiService.post(path, data);
  }
  removeGroups(data) {
    const path = 'configure/groups/delete';
    return this.apiService.post(path, data);
  }

  updateSubscription(subscription) {
    const path = 'configure/subscriptions/update';
    return this.apiService.post(path, subscription);
  }
}
