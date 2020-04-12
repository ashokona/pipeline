import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CustomAngularMaterialModule } from '../../../shared/custom-angular-material.module';
import { SharedModule } from '../../../shared/shared.module';
import { ProvisionComponent } from './provision.component';

describe('ProvisionComponent', () => {
  let component: ProvisionComponent;
  let fixture: ComponentFixture<ProvisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CustomAngularMaterialModule, RouterTestingModule, SharedModule ],
      declarations: [ ProvisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
