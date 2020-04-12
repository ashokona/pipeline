import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { UnusedResourcesComponent } from './unused-resources.component';
import { SharedModule } from '../../../shared/shared.module';
import { CustomAngularMaterialModule } from '../../../shared/custom-angular-material.module';
import { CostService } from '../../services/cost.service';

describe('UnusedResourcesComponent', () => {
  let component: UnusedResourcesComponent;
  let fixture: ComponentFixture<UnusedResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [
        BrowserAnimationsModule,
        SharedModule,
        CustomAngularMaterialModule,
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ UnusedResourcesComponent ],
      providers: [ CostService, HttpClient ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnusedResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
