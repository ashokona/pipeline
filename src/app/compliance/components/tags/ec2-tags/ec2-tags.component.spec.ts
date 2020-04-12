import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EC2TagManagementComponent } from './ec2-tags.component';

describe('AccessManagementComponent', () => {
  let component: EC2TagManagementComponent;
  let fixture: ComponentFixture<EC2TagManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EC2TagManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EC2TagManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
