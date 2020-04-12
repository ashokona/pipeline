import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAngularMaterialModule } from '../../custom-angular-material.module';
import { RowCardItemComponent } from './row-card-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';

describe('RowCardItemComponent', () => {
  let component: RowCardItemComponent;
  let fixture: ComponentFixture<RowCardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CustomAngularMaterialModule, FlexLayoutModule ],
      declarations: [ RowCardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
