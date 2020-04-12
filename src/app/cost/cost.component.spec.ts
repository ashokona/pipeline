import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedModule } from './../shared/shared.module';
import { CustomAngularMaterialModule } from './../shared/custom-angular-material.module';
import { CostComponent } from './cost.component';

describe('CostComponent', () => {
  let component: CostComponent;
  let fixture: ComponentFixture<CostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CustomAngularMaterialModule, RouterTestingModule, SharedModule ],
      declarations: [ CostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
