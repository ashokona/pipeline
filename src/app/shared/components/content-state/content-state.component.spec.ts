import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentStateComponent } from './content-state.component';

describe('ContentStateComponent', () => {
  let component: ContentStateComponent;
  let fixture: ComponentFixture<ContentStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
