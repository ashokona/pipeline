import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './shared/guards/auth-guard.service';
import { NoAuthGuardService } from './shared/guards/no-auth-guard.service';

const routes: Routes = [
  { path: 'auth', loadChildren: './authentication/authentication.module#AuthenticationModule', canActivate: [NoAuthGuardService] },
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: '**', redirectTo: '' , pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
