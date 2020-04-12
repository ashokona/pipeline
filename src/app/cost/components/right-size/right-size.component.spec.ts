import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSizeComponent } from './right-size.component';

describe('RightSizeComponent', () => {
  let component: RightSizeComponent;
  let fixture: ComponentFixture<RightSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
