import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3RegionMapComponent } from './d3-region-map.component';

describe('D3RegionMapComponent', () => {
  let component: D3RegionMapComponent;
  let fixture: ComponentFixture<D3RegionMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3RegionMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3RegionMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
