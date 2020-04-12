import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './../shared/shared.module';
import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!

import { ComplianceRoutingModule } from './compliance-routing.module';
import { ComplianceComponent } from './compliance.component';
import { TagsComponent } from './components/tags/tags.component';
import { ReportsComponent } from './components/reports/reports.component';
import { EncryptionComponent } from './components/encryption/encryption.component';
import { AuditScoreComponent } from './components/audit-score/audit-score.component';
import { AccessReviewComponent } from './components/access-review/access-review.component';
import { AuditTrailComponent } from './components/audit-trail/audit-trail.component';
import { TagConfigurationComponent } from './components/tags/tag-configuration/tag-configuration.component';
import { ManageTagComponent } from './components/tags/tag-configuration/manage-tag/manage-tag.component';
import { EC2TagsComponent } from './components/tags/ec2-tags/ec2-tags.component';
import { EC2TagComponent } from './components/tags/ec2-tags/ec2-tag/ec2-tag.component';
import { TagsService } from './services/tags.service';
import { BackupComponent } from './components/backup/backup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FullCalendarComponent } from './components/backup/full-calendar/full-calendar.component';
import { ConfigComponent } from './components/backup/config/config.component';
import { CalendarComponent } from './components/backup/calendar/calendar.component';
import { ComplianceDashboardService } from './services/complianceDashboard.service';

@NgModule({
  imports: [
    CommonModule,
    ComplianceRoutingModule,
    SharedModule,
    FlexLayoutModule,
    FullCalendarModule
  ],
  declarations: [
    ComplianceComponent,
    TagsComponent,
    ReportsComponent,
    EncryptionComponent,
    AuditScoreComponent,
    AccessReviewComponent,
    AuditTrailComponent,
    TagConfigurationComponent,
    ManageTagComponent,
    EC2TagsComponent,
    EC2TagComponent,
    BackupComponent,
    DashboardComponent,
    FullCalendarComponent,
    ConfigComponent,
    CalendarComponent
  ],
  providers: [TagsService, ComplianceDashboardService]
})
export class ComplianceModule { }
