import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  currentUser = new BehaviorSubject(null);
  isLoggedIn = new ReplaySubject(0);

  constructor(
    private router: Router,
    private apiService: ApiService,
    private tokenService: TokenService
  ) { }

  addAccount(data) {
    return this.apiService.post('cloudAccounts', data);
  }
  updateAwsAccount(data) {
    return this.apiService.post('updateAwsAccount', data);
  }

  getAccount() {
    return this.apiService.post('getcloudAccounts');
  }

  getAccountNumbers() {
    return this.apiService.post('getcloudAccountNo');
  }
}
