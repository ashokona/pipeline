import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityComponent } from '../security/security.component';
import { DashboardComponent } from '../security/components/dashboard/dashboard.component';
import { ReportComponent } from '../security/components/report/report.component';
import { ExclusionsComponent } from '../security/components/exclusions/exclusions.component';

const routes: Routes = [
  {
    path: '', component: SecurityComponent, children: [
      { path: '', redirectTo: 'risk' },
      { path: 'risk', component: DashboardComponent },
      { path: 'SecurityReports', component: ReportComponent },
      { path: 'exclusions', component: ExclusionsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
