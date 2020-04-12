import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { NavService } from '../shared/services/nav.service';
import { CustomAngularMaterialModule } from '../shared/custom-angular-material.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { MenuListItemComponent } from '../layout/menu-list-item/menu-list-item.component';
import { SideNavComponent } from '../layout/side-nav/side-nav.component';
import { TopNavComponent } from '../layout/top-nav/top-nav.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CustomAngularMaterialModule,
        SharedModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
      declarations: [
        HomeComponent,
        SideNavComponent,
        TopNavComponent,
        MenuListItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
