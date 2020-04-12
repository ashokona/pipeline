import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { TagInputModule } from 'ngx-chips';
import { MdePopoverModule } from '@material-extended/mde';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { HighchartsChartModule } from 'highcharts-angular';

import { CustomAngularMaterialModule } from './custom-angular-material.module';
import { SecondaryNavComponent } from './components/secondary-nav/secondary-nav.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DataTableRowComponent } from './components/data-table/data-table-row/data-table-row.component';
import { DetailsComponent } from './components/details/details.component';
import { RowCardItemComponent } from './components/row-card-item/row-card-item.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { GoogleChartComponent } from './charts/google-chart/google-chart.component';
import { UnderDevDirective } from './directives/under-dev.directive';
import { CustomNavComponent } from './components/custom-nav/custom-nav.component';
import { RouterModule } from '@angular/router';
import { TabsComponent } from './components/tabs/tabs.component';
import { CardComponent } from './components/card/card.component';
// import { AccountTagsComponent } from './components/account-tags/account-tags.component';
import { AuthoriserDirective } from './directives/authoriser.directive';
import { LoadingDirective } from './directives/loading.directive';
import { BlockLoaderDirective } from './directives/block-loader.directive';
import { DialogComponent } from './components/dialog/dialog.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ButtonLoadingDirective } from './directives/button-loading.directive';
import { ListComponent } from './components/list/list.component';
import { CopyClipboardDirective } from './directives/copy-clipboard.directive';
import { KeyValuePipe } from './pipes/key-value.pipe';
import { ContentStateDirective } from './directives/content-state.directive';
import { ContentStateComponent } from './components/content-state/content-state.component';
import { D3MapComponent } from './components/d3-map/d3-map.component';
import { DisableStateDirective } from './directives/disable-state.directive';
import { RestrictedAccessDirective } from './directives/restricted-access.directive';
// import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CustomAngularMaterialModule,
    MdePopoverModule,
    // HighchartsChartModule,
    // TagInputModule,
    ToastrModule.forRoot(),
    // OwlDateTimeModule,
    // OwlNativeDateTimeModule
  ],
  declarations: [
    TabsComponent,
    SecondaryNavComponent,
    CustomNavComponent,
    DataTableComponent,
    DataTableRowComponent,
    DetailsComponent,
    GoogleChartComponent,
    RowCardItemComponent,
    EmptyStateComponent,
    UnderDevDirective,
    RestrictedAccessDirective,
    CardComponent,
    // AccountTagsComponent,
    AuthoriserDirective,
    LoadingDirective,
    BlockLoaderDirective,
    DialogComponent,
    LoadingComponent,
    ButtonLoadingDirective,
    ListComponent,
    CopyClipboardDirective,
    KeyValuePipe,
    ContentStateDirective,
    DisableStateDirective,
    ContentStateComponent,
    D3MapComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CustomAngularMaterialModule,
    MdePopoverModule,
    // HighchartsChartModule,
    TabsComponent,
    DataTableComponent,
    DataTableRowComponent,
    SecondaryNavComponent,
    CustomNavComponent,
    DetailsComponent,
    GoogleChartComponent,
    RowCardItemComponent,
    EmptyStateComponent,
    UnderDevDirective,
    RestrictedAccessDirective,
    CardComponent,
    // AccountTagsComponent,
    AuthoriserDirective,
    DialogComponent,
    LoadingDirective,
    BlockLoaderDirective,
    LoadingComponent,
    ButtonLoadingDirective,
    ListComponent,
    CopyClipboardDirective,
    KeyValuePipe,
    ContentStateDirective,
    DisableStateDirective,
    ContentStateComponent,
    D3MapComponent
    // FullCalendarModule,
    // OwlDateTimeModule,
    // OwlNativeDateTimeModule
  ],
  entryComponents: [ ContentStateComponent ]
})
export class SharedModule { }
