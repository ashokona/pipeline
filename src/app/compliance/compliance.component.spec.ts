import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceComponent } from './compliance.component';
import { CustomAngularMaterialModule } from 'src/app/shared/custom-angular-material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';

describe('ComplianceComponent', () => {
  let component: ComplianceComponent;
  let fixture: ComponentFixture<ComplianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CustomAngularMaterialModule, RouterTestingModule, SharedModule ],
      declarations: [ ComplianceComponent ]
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
