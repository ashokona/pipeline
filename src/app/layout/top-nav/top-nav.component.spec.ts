import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomAngularMaterialModule } from '../../shared/custom-angular-material.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthenticationService } from '../../shared/services/authentication.service';
import { NavService } from '../../shared/services/nav.service';
import { TopNavComponent } from './top-nav.component';

describe('TopNavComponent', () => {
  let component: TopNavComponent;
  let fixture: ComponentFixture<TopNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, CustomAngularMaterialModule, RouterTestingModule ],
      declarations: [ TopNavComponent ],
      providers: [ HttpClient, AuthenticationService, TopNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
