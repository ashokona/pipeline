import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SmartShutdownsComponent } from './smart-shutdowns.component';
import { SharedModule } from '../../../shared/shared.module';
import { CustomAngularMaterialModule } from '../../../shared/custom-angular-material.module';

describe('SmartShutdownsComponent', () => {
  let component: SmartShutdownsComponent;
  let fixture: ComponentFixture<SmartShutdownsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule, RouterTestingModule, BrowserAnimationsModule ],
      declarations: [ SmartShutdownsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartShutdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
