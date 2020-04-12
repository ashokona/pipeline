import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulesComponent } from './schedules.component';
import { SharedModule } from '../../../../shared/shared.module';
import { CustomAngularMaterialModule } from '../../../../shared/custom-angular-material.module';
import { CreateScheduleComponent } from './create-schedule/create-schedule.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SchedulesComponent', () => {
  let component: SchedulesComponent;
  let fixture: ComponentFixture<SchedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule, BrowserAnimationsModule ],
      declarations: [ SchedulesComponent, CreateScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
