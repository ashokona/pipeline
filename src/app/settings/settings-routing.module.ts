import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { AccessManagementComponent } from './components/access-management/access-management.component';
import { GroupManagementComponent } from './components/group-management/group-management.component';
// import { SubscriptionManagementComponent } from './components/subscription-management/subscription-management.component';

const routes: Routes = [
  {
    path: '', component: SettingsComponent, children: [
      { path: '', redirectTo: 'accounts' },
      { path: 'accounts', component: ConfigurationComponent },
      { path: 'accessmanagment', component: AccessManagementComponent },
      { path: 'groups', component: GroupManagementComponent },
      // { path: 'subscriptionManagement', component: SubscriptionManagementComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
