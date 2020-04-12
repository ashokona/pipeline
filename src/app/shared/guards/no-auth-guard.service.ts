import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuardService {

  constructor(
    private router: Router,
    private userService: UserService,
    private tokenService: TokenService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.tokenService.getToken()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

}
