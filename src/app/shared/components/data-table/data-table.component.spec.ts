import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdePopoverModule } from '@material-extended/mde';
import { ToastrService, ToastrModule } from 'ngx-toastr';

import { CustomAngularMaterialModule } from '../../custom-angular-material.module';
import { DataTableComponent } from './data-table.component';

describe('DataTableComponent', () => {
  let component: DataTableComponent;
  let fixture: ComponentFixture<DataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        CustomAngularMaterialModule,
        MdePopoverModule,
        ToastrModule.forRoot()
      ],
      declarations: [ DataTableComponent ],
      providers: [ ToastrService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
