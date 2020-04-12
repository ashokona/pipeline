import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomAngularMaterialModule } from '../../../../../shared/custom-angular-material.module';

import { AwsComponent } from './aws.component';

describe('AwsComponent', () => {
  let component: AwsComponent;
  let fixture: ComponentFixture<AwsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CustomAngularMaterialModule, BrowserAnimationsModule, ReactiveFormsModule, FormsModule ],
      declarations: [ AwsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
