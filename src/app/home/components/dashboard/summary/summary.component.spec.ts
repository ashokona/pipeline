import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { SummaryComponent } from './summary.component';
import { CustomAngularMaterialModule } from 'src/app/shared/custom-angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderDevComponent } from 'src/app/shared/components/under-dev/under-dev.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UnderDevComponent],
  entryComponents: [UnderDevComponent]
})
export class FakeTestUnderDevModule {}

describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CustomAngularMaterialModule, SharedModule, FakeTestUnderDevModule ],
      declarations: [ SummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
