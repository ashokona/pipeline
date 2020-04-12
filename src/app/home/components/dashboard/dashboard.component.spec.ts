import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAngularMaterialModule } from '../../../shared/custom-angular-material.module';
import { SharedModule } from '../../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CostComponent } from './cost/cost.component';
import { SummaryComponent } from './summary/summary.component';
import { ComplianceComponent } from './compliance/compliance.component';
import { SecurityComponent } from './security/security.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderDevComponent } from 'src/app/shared/components/under-dev/under-dev.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UnderDevComponent],
  entryComponents: [UnderDevComponent]
})
export class FakeTestUnderDevModule {}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CustomAngularMaterialModule, SharedModule, FakeTestUnderDevModule ],
      declarations: [ DashboardComponent, InventoryComponent, CostComponent, SummaryComponent, ComplianceComponent, SecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
