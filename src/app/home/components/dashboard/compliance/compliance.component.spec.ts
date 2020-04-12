import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAngularMaterialModule } from '../../../../shared/custom-angular-material.module';
import { SharedModule } from './../../../../shared/shared.module';
import { ComplianceComponent } from './compliance.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderDevComponent } from 'src/app/shared/components/under-dev/under-dev.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UnderDevComponent],
  entryComponents: [UnderDevComponent]
})
export class FakeTestUnderDevModule {}

describe('ComplianceComponent', () => {
  let component: ComplianceComponent;
  let fixture: ComponentFixture<ComplianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplianceComponent ],
      imports: [
        CustomAngularMaterialModule,
        SharedModule,
        FakeTestUnderDevModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
