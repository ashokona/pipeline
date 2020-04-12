import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from './services/settings.service';
import { Settings } from './models/settings.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cops-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  module: String = 'settings';
  subscription: Subscription;
  secNavTabs = [
    {
      displayName: 'Cloud Account Configuration',
      iconName: 'settings_system_daydream',
      route: 'accounts',
      underDev: true
    },
    {
      displayName: 'Access Management',
      iconName: 'settings_applications',
      route: 'accessmanagment',
      underDev: true
    },
    {
      displayName: 'Group Managemnt',
      iconName: 'group',
      route: 'groups',
      underDev: true
    }
    // ,
    // {
    //   displayName: 'Subscription Managemnt',
    //   iconName: 'group',
    //   route: 'subscriptionManagement',
    //   underDev: false
    // }
  ]
  settingsModel: Settings;

  constructor(
    private router: Router, private settingsService: SettingsService, private cdr: ChangeDetectorRef
  ) {
    this.settingsModel = new Settings();
    this.subscription = this.settingsService.loader.subscribe(value => {
      this.settingsModel.gridLoading = value;
      this.cdr.detectChanges();
    })
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onNavItemChanged(navItem) {
    const route = `${this.module}/${navItem}`;
    this.router.navigate([route]);
  }


}
