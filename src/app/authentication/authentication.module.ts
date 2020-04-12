import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { VerifyComponent } from './verify/verify.component';

import { SharedModule } from '../shared/shared.module';
import { ResetComponent } from './reset/reset.component';
import { FullPageNotificationComponent } from './full-page-notification/full-page-notification.component';

@NgModule({
  declarations: [AuthenticationComponent, SigninComponent, SignupComponent, VerifyComponent, ResetComponent, FullPageNotificationComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
