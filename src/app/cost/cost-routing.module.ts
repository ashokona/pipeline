import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CostComponent } from './cost.component';
import { SpendsComponent } from './components/spends/spends.component';
import { SmartShutdownsComponent } from './components/smart-shutdowns/smart-shutdowns.component';
import { SchedulesComponent } from './components/smart-shutdowns/schedules/schedules.component';
import { ReportsComponent } from './components/smart-shutdowns/reports/reports.component';
import { RightSizeComponent } from './components/right-size/right-size.component';
import { UnusedResourcesComponent } from './components/unused-resources/unused-resources.component';
import { ReservedInstancesComponent } from './components/reserved-instances/reserved-instances.component';
import { AuditTrailComponent } from './components/audit-trail/audit-trail.component';
import { UnusedResourcesResolver } from './resolvers/unused-resources';
import { FinancialReportsComponent } from './components/financial-reports/financial-reports.component';

const routes: Routes = [
  {
    path: '', component: CostComponent, children: [
      { path: '', redirectTo: 'spends' },
      { path: 'spends', component: SpendsComponent },
      { path: 'reservedinstances', component: ReservedInstancesComponent },
      { path: 'shutdowns', component: SmartShutdownsComponent, children: [
        { path: '', redirectTo: 'schedules', pathMatch: 'full' },
        { path: 'schedules', component: SchedulesComponent },
        { path: 'reports', component: ReportsComponent },
      ]},
      { path: 'unusedresources',
        component: UnusedResourcesComponent,
        resolve: { message: UnusedResourcesResolver }
      },
      { path: 'rightsize', component: RightSizeComponent },
      { path: 'audittrail', component: AuditTrailComponent },
      { path: 'financialreports', component: FinancialReportsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    UnusedResourcesResolver
  ]
})
export class CostRoutingModule { }
