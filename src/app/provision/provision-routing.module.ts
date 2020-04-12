import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ProvisionComponent } from './provision.component';
import { AwsComponent } from './components/aws/aws.component';
import { AzureComponent } from './components/azure/azure.component';
import { KubernetesComponent } from './components/kubernetes/kubernetes.component';
import { GenericComponent } from './components/generic/generic.component';
import { ProvisionedStacksComponent } from './components/provisioned-stacks/provisioned-stacks.component';
import { AuditTrailComponent } from './components/audit-trail/audit-trail.component';
import { DockerComponent } from './components/docker/docker.component';

const routes: Routes = [
  {
    path: '', component: ProvisionComponent, children: [
      { path: '', redirectTo: 'aws' },
      { path: 'generic', component: GenericComponent },
      { path: 'aws', component: AwsComponent },
      { path: 'docker', component: DockerComponent },
      { path: 'azure', component: AzureComponent },
      { path: 'kubernetes', component: KubernetesComponent },
      { path: 'provisionedstacks', component: ProvisionedStacksComponent },
      { path: 'audittrail', component: AuditTrailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvisionRoutingModule { }

@NgModule({
  imports: [BrowserAnimationsModule],
})
export class PizzaPartyAppModule { }
