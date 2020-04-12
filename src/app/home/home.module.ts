import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './/home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { Ng2OdometerModule } from 'ng2-odometer';

import { FlexLayoutModule } from '@angular/flex-layout';
import { TopNavComponent } from '../layout/top-nav/top-nav.component';
import { SideNavComponent } from '../layout/side-nav/side-nav.component';
import { HomeComponent } from './home.component';
import { MenuListItemComponent } from '../layout/menu-list-item/menu-list-item.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SummaryComponent } from './components/dashboard/summary/summary.component';
import { CostComponent } from './components/dashboard/cost/cost.component';
import { ComplianceComponent } from './components/dashboard/compliance/compliance.component';
import { SecurityComponent } from './components/dashboard/security/security.component';
import { InventoryComponent } from './components/dashboard/inventory/inventory.component';
import { DashboardService } from './services/dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    Ng2OdometerModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    TopNavComponent,
    SideNavComponent,
    MenuListItemComponent,
    DashboardComponent,
    SummaryComponent,
    CostComponent,
    ComplianceComponent,
    SecurityComponent,
    InventoryComponent
  ],
  providers: [
    DashboardService
  ]
})
export class HomeModule { }
