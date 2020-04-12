import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from './shared/services/user.service';

// declare ga as a function to set and sent the events
declare let ga: Function;
@Component({
  selector: 'cops-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cloud COpS';

  constructor(
    private userService: UserService,
    public router: Router
  ) {
    this.userService.refreshToken();

    // subscribe to router events and send page views to Google Analytics
    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');

      }

    });
  }
}
