import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderDevComponent } from './under-dev.component';

describe('UnderDevComponent', () => {
  let component: UnderDevComponent;
  let fixture: ComponentFixture<UnderDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
