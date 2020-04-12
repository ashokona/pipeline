import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from './authentication.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { VerifyComponent } from './verify/verify.component';
import { ResetComponent } from './reset/reset.component';

const routes: Routes = [
  { path: '', component: AuthenticationComponent, children: [
    // { path: '', redirectTo: 'signin'},
    { path: '', component: SigninComponent },
    { path: 'signin/:type', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'verify/:token', component: VerifyComponent },
    { path: 'reset/:token', component: ResetComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
