import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CustomAngularMaterialModule } from '../../shared/custom-angular-material.module';
import { NavService } from '../../shared/services/nav.service';
import { NavItem } from '../../shared/models/nav-item';
import { MenuListItemComponent } from '../menu-list-item/menu-list-item.component';
import { SideNavComponent } from './side-nav.component';

describe('SideNavComponent', () => {
  let component: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CustomAngularMaterialModule, RouterTestingModule ],
      declarations: [ SideNavComponent, MenuListItemComponent ],
      providers: [ NavService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
