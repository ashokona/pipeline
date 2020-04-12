import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInstancesComponent } from './add-instances.component';

describe('AddInstancesComponent', () => {
  let component: AddInstancesComponent;
  let fixture: ComponentFixture<AddInstancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInstancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInstancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
