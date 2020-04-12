import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3GroupClusteringComponent } from './d3-group-clustering.component';

describe('D3GroupClusteringComponent', () => {
  let component: D3GroupClusteringComponent;
  let fixture: ComponentFixture<D3GroupClusteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3GroupClusteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3GroupClusteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
