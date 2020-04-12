import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';
import { TokenService } from '../services/token.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService,
    private tokenService: TokenService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUrl = state.url.split('/');
    if (this.userService.currentUser.value) {
      if (!this.userService.currentUser.value.isConfigured && currentUrl.indexOf('settings') < 0) {
        this.router.navigate(['/settings']);
        return false;
      }
      if (!this.checkSettingsAuth(currentUrl, this.userService.currentUser.value)) {
        this.router.navigate(['']);
        return false;
      }
      return true;
    } else if (this.tokenService.getToken()) {
      return this.userService.refreshToken().pipe(
        map(
          result => {
            if (!this.userService.currentUser.value.isConfigured && currentUrl.indexOf('settings') < 0) {
                this.router.navigate(['/settings']);
                return false;
            }
            if (!this.checkSettingsAuth(currentUrl, this.userService.currentUser.value)) {
              this.router.navigate(['']);
              return false;
            }
            return true;
          },
          err => {
            return false;
          }
        )
      );
    } else {
      this.userService.signout();
      return false;
    }
  }

  checkSettingsAuth(url, user) {
    return (url.indexOf('settings') >= 0 && user.role !== 'admin') ? false : true;
  }
}
