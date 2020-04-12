import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventoryComponent } from './inventory.component';
import { ComputeComponent } from './components/compute/compute.component';
import { StorageComponent } from './components/storage/storage.component';
import { DatabaseComponent } from './components/database/database.component';
import { IamComponent } from './components/iam/iam.component';

const routes: Routes = [
  {
    path: '', component: InventoryComponent, children: [
      { path: '', redirectTo: 'compute' },
      { path: 'compute', component: ComputeComponent },
      { path: 'storage', component: StorageComponent },
      { path: 'database', component: DatabaseComponent },
      { path: 'iam', component: IamComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
