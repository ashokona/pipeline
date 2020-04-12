import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplianceComponent } from './compliance.component';
import { TagsComponent } from './components/tags/tags.component';
import { ReportsComponent } from './components/reports/reports.component';
import { EncryptionComponent } from './components/encryption/encryption.component';
import { AuditScoreComponent } from './components/audit-score/audit-score.component';
import { AccessReviewComponent } from './components/access-review/access-review.component';
import { AuditTrailComponent } from './components/audit-trail/audit-trail.component';
import { BackupComponent } from './components/backup/backup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'

const routes: Routes = [
  {
    path: '', component: ComplianceComponent, children: [
      { path: '', redirectTo: 'Dashboard' },
      { path: 'Dashboard', component: DashboardComponent },
      { path: 'tags', component: TagsComponent },
      { path: 'encryption', component: EncryptionComponent },
      { path: 'accessreview', component: AccessReviewComponent },
      { path: 'auditscore', component: AuditScoreComponent },
      { path: 'backup', component: BackupComponent},
      { path: 'reports', component: ReportsComponent },
      { path: 'audittrail', component: AuditTrailComponent }
      // { path: 'settings', component: SettingsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplianceRoutingModule { }
