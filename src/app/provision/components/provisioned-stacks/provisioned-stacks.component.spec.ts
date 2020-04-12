import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionedStacksComponent } from './provisioned-stacks.component';

describe('ProvisionedStacksComponent', () => {
  let component: ProvisionedStacksComponent;
  let fixture: ComponentFixture<ProvisionedStacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionedStacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionedStacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
