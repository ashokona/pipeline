import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPageNotificationComponent } from './full-page-notification.component';

describe('FullPageNotificationComponent', () => {
  let component: FullPageNotificationComponent;
  let fixture: ComponentFixture<FullPageNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullPageNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullPageNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
