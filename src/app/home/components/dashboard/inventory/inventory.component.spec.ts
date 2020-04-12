import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '../../../../shared/shared.module';
import { CustomAngularMaterialModule } from '../../../../shared/custom-angular-material.module';
import { InventoryComponent } from './inventory.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderDevComponent } from 'src/app/shared/components/under-dev/under-dev.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UnderDevComponent],
  entryComponents: [UnderDevComponent]
})
export class FakeTestUnderDevModule {}

describe('InventoryComponent', () => {
  let component: InventoryComponent;
  let fixture: ComponentFixture<InventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule, CustomAngularMaterialModule, FakeTestUnderDevModule ],
      declarations: [ InventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
