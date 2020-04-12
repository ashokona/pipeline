import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendsComponent } from './spends.component';
import { SharedModule } from '../../../shared/shared.module';
import { CustomAngularMaterialModule } from '../../../shared/custom-angular-material.module';

describe('SpendsComponent', () => {
  let component: SpendsComponent;
  let fixture: ComponentFixture<SpendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule, CustomAngularMaterialModule ],
      declarations: [ SpendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
