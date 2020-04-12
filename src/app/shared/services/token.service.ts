import { Injectable } from '@angular/core';
import { BroadcasterService } from './broadcaster.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private broadcaster: BroadcasterService, private readonly router: Router) { }

  getToken(): String {
    const userToken = JSON.parse(sessionStorage.getItem('userToken'));
    return !userToken ? null : userToken;
  }

  setToken(token: String) {
    sessionStorage.setItem('userToken', JSON.stringify(token));
  }

  getGroups() {
    const groups = JSON.parse(sessionStorage.getItem('groups'));
    return groups ? groups : { readOnly: [], active: [] };
  }

  setGroups(user) {
    let groups = { readOnly: [], active: [] };
    if (user.groups) {
      user.groups.map(grp => {
        if (grp.readOnly) {
          groups.readOnly.push(grp._id);
        } else {
          groups.active.push(grp._id);
        }
      });
    }
    sessionStorage.setItem('groups', JSON.stringify(groups));
  }

  getGroup(): String {
    const groupId = JSON.parse(localStorage.getItem('groupId'));
    return !groupId ? 'null' : groupId;
  }

  storeGroupOnSignin(groupId: String) {
    const existingGroupId = JSON.parse(localStorage.getItem('groupId'));
    if (!existingGroupId)
      localStorage.setItem('groupId', JSON.stringify(groupId));
  }

  setGroup(groupId: String) {
    localStorage.setItem('groupId', JSON.stringify(groupId));
    this.broadcaster.broadcastGroupChange(JSON.stringify(groupId));
  }


  destroyToken() {
    window.sessionStorage.removeItem('userToken');
    window.sessionStorage.removeItem('groupId');
  }
}
