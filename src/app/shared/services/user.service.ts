import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public updatedUser;
  currentUser = new BehaviorSubject(null);
  isLoggedIn = new ReplaySubject(0);
  signInFromData = new BehaviorSubject(null);
  // private currentUserSubject = new BehaviorSubject<any>({});
  // public currentUser = this.currentUserSubject.asObservable();

  // private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  // public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private router: Router,
    private apiService: ApiService,
    private tokenService: TokenService
  ) { }

  signup(data) {
    return this.apiService.post('identity/signup', data);
  }

  signin(data) {
    return this.apiService.post('identity/signin', data)
      .pipe(
        tap(result => {
          this.tokenService.setToken(result.data.token);
          this.tokenService.setGroups(result.data.user);
          this.tokenService.storeGroupOnSignin(result.data.user.groups[0]._id);
          this.updatedUser = result.data.user;
          this.currentUser.next(result.data.user);
          this.isLoggedIn.next(true);
        })
      );
  }

  verify(data) {
    return this.apiService.get('identity/verify', data);
  }

  cantAccess(path, data) {
    return this.apiService.get(`identity/${path}`, data);
  }

  resetPassword(data) {
    return this.apiService.post('identity/resetPassword', data);
  }

  configure() {
    return this.apiService.get('identity/configure');
  }

  refreshToken() {
    return this.apiService.get('identity/refreshToken').pipe(
      tap( result => {
          this.tokenService.setToken(result.data.token);
          this.tokenService.setGroups(result.data.user);
          this.updatedUser = result.data.user;
          this.currentUser.next(result.data.user);
          this.isLoggedIn.next(true);
        }, err => {
          this.signout();
        }
      )
    );
  }

  signout() {
    this.tokenService.destroyToken();
    this.currentUser.next(null);
    this.isLoggedIn.next(false);
    this.router.navigate(['/auth']);
  }

}
