import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EC2TagComponent } from './ec2-tag.component';

describe('ManageUserComponent', () => {
  let component: EC2TagComponent;
  let fixture: ComponentFixture<EC2TagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EC2TagComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EC2TagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
