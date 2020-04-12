import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AuditTrailComponent } from './audit-trail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomAngularMaterialModule } from 'src/app/shared/custom-angular-material.module';
import { CostService } from '../../services/cost.service';

describe('AuditTrailComponent', () => {
  let component: AuditTrailComponent;
  let fixture: ComponentFixture<AuditTrailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditTrailComponent ],
      imports : [ BrowserAnimationsModule, SharedModule, CustomAngularMaterialModule, HttpClientTestingModule ],
      providers: [ CostService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditTrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
