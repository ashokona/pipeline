import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagConfigurationComponent } from './tag-configuration.component';

describe('AccessManagementComponent', () => {
  let component: TagConfigurationComponent;
  let fixture: ComponentFixture<TagConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TagConfigurationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
