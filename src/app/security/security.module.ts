import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Ng2OdometerModule } from 'ng2-odometer';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './security.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReportComponent } from './components/report/report.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ExclusionsComponent } from './components/exclusions/exclusions.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    Ng2OdometerModule,
    SecurityRoutingModule,
    ScrollingModule
  ],
  declarations: [
    SecurityComponent,
    DashboardComponent,
    ReportComponent,
    ExclusionsComponent
  ]
})
export class SecurityModule {}