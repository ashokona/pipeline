import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { AccessManagementComponent } from './components/access-management/access-management.component';
import { ManageUserComponent } from './components/access-management/manage-user/manage-user.component';
import { GroupManagementComponent } from './components/group-management/group-management.component';
import { AddGroupComponent } from './components/group-management/add-group/add-group.component';
import { SharedModule } from '../shared/shared.module';
import { ManageAccountComponent } from './components/configuration/manage-account/manage-account.component';
import { ConfigureAccountComponent } from './components/configuration/configure-account/configure-account.component';
import { SubscriptionManagementComponent } from './components/subscription-management/subscription-management.component';
import { EditSubscriptionComponent } from './components/subscription-management/edit-subscription/edit-subscription.component';
// import { TagManagementComponent } from './components/tag-managment/tag-management.component';
// import { ManageTagComponent } from './components/tag-managment/manage-tag/manage-tag.component';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    FlexLayoutModule,
    SharedModule
  ],
  declarations: [
    SettingsComponent,
    ConfigurationComponent,
    AccessManagementComponent,
    ManageUserComponent,
    GroupManagementComponent,
    AddGroupComponent,
    ManageAccountComponent,
    ConfigureAccountComponent,
    SubscriptionManagementComponent,
    EditSubscriptionComponent
    // TagManagementComponent,
    // ManageTagComponent
  ],
  entryComponents: [
    ConfigureAccountComponent
  ]
})
export class SettingsModule { }
