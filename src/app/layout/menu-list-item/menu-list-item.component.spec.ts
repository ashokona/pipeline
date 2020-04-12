import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CustomAngularMaterialModule } from '../../shared/custom-angular-material.module';
import { MenuListItemComponent } from './menu-list-item.component';
import { NavService } from '../../shared/services/nav.service';
import { Router } from '@angular/router';

describe('MenuListItemComponent', () => {
  let component: MenuListItemComponent;
  let fixture: ComponentFixture<MenuListItemComponent>;

  const router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CustomAngularMaterialModule, RouterTestingModule ],
      declarations: [ MenuListItemComponent ],
      providers: [ NavService, { provide: Router, useValue: router } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
