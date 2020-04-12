import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAngularMaterialModule } from '../../../../shared/custom-angular-material.module';
import { SharedModule } from '../../../../shared/shared.module';
import { CostComponent } from './cost.component';

describe('CostComponent', () => {
  let component: CostComponent;
  let fixture: ComponentFixture<CostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostComponent ],
      imports: [
        CustomAngularMaterialModule,
        SharedModule
      ]
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
