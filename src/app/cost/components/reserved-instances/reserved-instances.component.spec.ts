import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservedInstancesComponent } from './reserved-instances.component';

describe('ReservedInstancesComponent', () => {
  let component: ReservedInstancesComponent;
  let fixture: ComponentFixture<ReservedInstancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservedInstancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservedInstancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
