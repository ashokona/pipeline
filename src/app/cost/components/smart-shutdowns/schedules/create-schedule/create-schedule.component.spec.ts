import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CreateScheduleComponent } from './create-schedule.component';
import { CustomAngularMaterialModule } from 'src/app/shared/custom-angular-material.module';

describe('CreateScheduleComponent', () => {
  let component: CreateScheduleComponent;
  let fixture: ComponentFixture<CreateScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CustomAngularMaterialModule, BrowserAnimationsModule ],
      declarations: [ CreateScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
