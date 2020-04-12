import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAngularMaterialModule } from '../../../custom-angular-material.module';
import { DataTableRowComponent } from './data-table-row.component';
import { MdePopoverModule } from '@material-extended/mde';

describe('DataTableRowComponent', () => {
  let component: DataTableRowComponent;
  let fixture: ComponentFixture<DataTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CustomAngularMaterialModule, MdePopoverModule ],
      declarations: [ DataTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
