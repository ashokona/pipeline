import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './../shared/shared.module';

import { ProvisionRoutingModule } from './provision-routing.module';
import { ProvisionComponent } from './provision.component';
import { AwsComponent } from './components/aws/aws.component';
import { KubernetesComponent } from './components/kubernetes/kubernetes.component';
import { AzureComponent } from './components/azure/azure.component';
import { GenericComponent } from './components/generic/generic.component';
import { ProvisionedStacksComponent } from './components/provisioned-stacks/provisioned-stacks.component';
import { AuditTrailComponent } from './components/audit-trail/audit-trail.component';
import { DockerComponent } from './components/docker/docker.component';

@NgModule({
  imports: [
    CommonModule,
    ProvisionRoutingModule,
    SharedModule,
    FlexLayoutModule
  ],
  declarations: [
    ProvisionComponent,
    AwsComponent,
    AzureComponent,
    KubernetesComponent,
    GenericComponent,
    ProvisionedStacksComponent,
    AuditTrailComponent,
    DockerComponent
  ]
})
export class ProvisionModule { }
