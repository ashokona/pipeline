import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAngularMaterialModule } from '../../../../shared/custom-angular-material.module';
import { SharedModule } from './../../../../shared/shared.module';
import { SecurityComponent } from './security.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderDevComponent } from 'src/app/shared/components/under-dev/under-dev.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UnderDevComponent],
  entryComponents: [UnderDevComponent]
})
export class FakeTestUnderDevModule {}

describe('SecurityComponent', () => {
  let component: SecurityComponent;
  let fixture: ComponentFixture<SecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CustomAngularMaterialModule, SharedModule, FakeTestUnderDevModule ],
      declarations: [ SecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
