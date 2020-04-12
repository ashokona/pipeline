import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CustomAngularMaterialModule } from '../../custom-angular-material.module';
import { NavService } from '../../services/nav.service';
import { SecondaryNavComponent } from './secondary-nav.component';

describe('SecondaryNavComponent', () => {
  let component: SecondaryNavComponent;
  let fixture: ComponentFixture<SecondaryNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CustomAngularMaterialModule, RouterTestingModule ],
      declarations: [ SecondaryNavComponent ],
      providers: [ NavService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
