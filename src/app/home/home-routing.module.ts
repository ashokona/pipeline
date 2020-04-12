import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuardService } from '../shared/guards/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: '', redirectTo: 'dashboard'},
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
    { path: 'cost', loadChildren: '../cost/cost.module#CostModule', canActivate: [AuthGuardService] },
    { path: 'compliance', loadChildren: '../compliance/compliance.module#ComplianceModule', canActivate: [AuthGuardService] },
    { path: 'security', loadChildren: '../security/security.module#SecurityModule', canActivate: [AuthGuardService] },
    { path: 'resources', loadChildren: '../resources/resources.module#ResourcesModule', canActivate: [AuthGuardService] },
    { path: 'provision', loadChildren: '../provision/provision.module#ProvisionModule', canActivate: [AuthGuardService] },
    { path: 'inventory', loadChildren: '../inventory/inventory.module#InventoryModule', canActivate: [AuthGuardService] },
    { path: 'settings', loadChildren: '../settings/settings.module#SettingsModule', canActivate: [AuthGuardService] }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
