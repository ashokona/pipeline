import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  fcm_token;
  constructor(
    private tokenService: TokenService
  ) {}

  login(username: string, password: string) {
    const users = [
      'shamayel@mops.com',
      'raju@mops.com',
      'sai@mops.com',
      'makki@mops.com',
      'jose@mops.com',
      'satish@mops.com',
      'ashok@mops.com',
      '47'];
    if (users.indexOf(username) > -1 && ['cryptic123', '47'].indexOf(password)) {
      sessionStorage.setItem('currentUser', JSON.stringify('1ma093nxkkf6woz84nnf8sdn3ncs52p8hhfsfs'));
      return true;
    }
    return false;
  }

  logout() {
    // remove user from local storage to log user out
    this.tokenService.destroyToken();
  }
}
