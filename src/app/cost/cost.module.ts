import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
 
import { CostService } from './services/cost.service';
import { CostRoutingModule } from './cost-routing.module';
import { CostComponent } from './cost.component';
import { SpendsComponent } from './components/spends/spends.component';
import { SchedulesComponent } from './components/smart-shutdowns/schedules/schedules.component';
import { SmartShutdownsComponent } from './components/smart-shutdowns/smart-shutdowns.component';
import { ReportsComponent } from './components/smart-shutdowns/reports/reports.component';
import { RightSizeComponent } from './components/right-size/right-size.component';
import { UnusedResourcesComponent } from './components/unused-resources/unused-resources.component';
import { ReservedInstancesComponent } from './components/reserved-instances/reserved-instances.component';
import { AuditTrailComponent } from './components/audit-trail/audit-trail.component';
import { UnusedResourcesResolver } from './resolvers/unused-resources';
import { FinancialReportsComponent } from './components/financial-reports/financial-reports.component';
import { CreateScheduleComponent } from './components/smart-shutdowns/schedules/create-schedule/create-schedule.component';
import { AddInstancesComponent } from './components/smart-shutdowns/schedules/add-instances/add-instances.component';
import { ManageScheduleComponent } from './components/smart-shutdowns/schedules/manage-schedule/manage-schedule.component';
import { CostDashboardService } from './services/cost-dashboard.service';
import { RecommendationDetailsComponent } from './components/reserved-instances/recommendation-details/recommendation-details.component';
// import { D3mapComponent } from './components/spends/d3map/d3map.component'

@NgModule({
  imports: [
    CommonModule,
    CostRoutingModule,
    SharedModule,
    FlexLayoutModule,
    NgbModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  declarations: [
    CostComponent,
    SpendsComponent,
    SchedulesComponent,
    RightSizeComponent,
    UnusedResourcesComponent,
    ReservedInstancesComponent,
    AuditTrailComponent,
    FinancialReportsComponent,
    SmartShutdownsComponent,
    ReportsComponent,
    CreateScheduleComponent,
    AddInstancesComponent,
    ManageScheduleComponent,
    RecommendationDetailsComponent,
      // D3mapComponent
  ],
  providers: [
    CostService,
    CostDashboardService
  ],
  entryComponents: [CreateScheduleComponent, AddInstancesComponent, RecommendationDetailsComponent]
})
export class CostModule { }
