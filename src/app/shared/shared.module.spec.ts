import { SharedModule } from './shared.module';
import { TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdePopoverModule } from '@material-extended/mde';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CustomAngularMaterialModule } from './custom-angular-material.module';
import { TabsComponent } from './elements/tabs/tabs.component';
import { SecondaryNavComponent } from './components/secondary-nav/secondary-nav.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DataTableRowComponent } from './components/data-table/data-table-row/data-table-row.component';
import { DetailsComponent } from './components/details/details.component';
import { RowCardItemComponent } from './components/row-card-item/row-card-item.component';
import { GoogleChartComponent } from './charts/google-chart/google-chart.component';

describe('SharedModule', () => {
  let sharedModule: SharedModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CustomAngularMaterialModule,
        MdePopoverModule,
        FlexLayoutModule
      ],
      declarations: [
        TabsComponent,
        SecondaryNavComponent,
        DataTableComponent,
        DataTableRowComponent,
        DetailsComponent,
        GoogleChartComponent,
        RowCardItemComponent
      ]
    }).compileComponents();
    sharedModule = new SharedModule();
  });

  it('should create an instance', () => {
    expect(sharedModule).toBeTruthy();
  });
});
