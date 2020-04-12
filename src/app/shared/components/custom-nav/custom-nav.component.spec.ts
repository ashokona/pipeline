import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavService } from '../../services/nav.service';
import { CustomNavComponent } from './custom-nav.component';
import { SharedModule } from '../../shared.module';

describe('CustomNavComponent', () => {
  let component: CustomNavComponent;
  let fixture: ComponentFixture<CustomNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, SharedModule ],
      providers: [ NavService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
