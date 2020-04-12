import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './../shared/shared.module';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { ComputeComponent } from './components/compute/compute.component';
import { StorageComponent } from './components/storage/storage.component';
import { DatabaseComponent } from './components/database/database.component';
import { VisualizationComponent } from './components/visualization/visualization.component';
import { D3RegionMapComponent } from './components/d3-region-map/d3-region-map.component';
import { D3GroupClusteringComponent } from './components/d3-group-clustering/d3-group-clustering.component';
import { D3GroupedForceDirectedComponent } from './components/d3-grouped-force-directed/d3-grouped-force-directed.component';
import { IamComponent } from './components/iam/iam.component';

@NgModule({
  declarations: [
    InventoryComponent,
    ComputeComponent,
    StorageComponent,
    DatabaseComponent,
    VisualizationComponent,
    D3RegionMapComponent,
    D3GroupClusteringComponent,
    D3GroupedForceDirectedComponent,
    IamComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    FlexLayoutModule,
    SharedModule
  ],
  entryComponents: [
    VisualizationComponent
  ]
})
export class InventoryModule { }
