import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3GroupedForceDirectedComponent } from './d3-grouped-force-directed.component';

describe('D3GroupedForceDirectedComponent', () => {
  let component: D3GroupedForceDirectedComponent;
  let fixture: ComponentFixture<D3GroupedForceDirectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3GroupedForceDirectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3GroupedForceDirectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
