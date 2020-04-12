import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ChangeDetectorRef } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSnackBar } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import { DataTable } from '../../models/data-table';

@Component({
  selector: 'cops-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DataTableComponent implements OnInit, AfterViewInit {
  // dataSource = new MatTableDataSource([]);
  dataSource: MatTableDataSource<any[]>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, null) sort: MatSort;
  @ViewChild('input', null) input: ElementRef;

  @Input('options')
  set options(options: DataTable) {
    this.isLoading = true;
    this.tableOptions = Object.assign(this.tableOptions, options);
  }

  @Input('data')
  set data(data: any[]) {
    if(data) {
      this.isLoading = false;
      this.dataSource = new MatTableDataSource(data);
      this.selection = new SelectionModel<any>(true, []);
      this.ref.detectChanges();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  @Input('columns')
  set columns(columns: any) {
    this.columnsData = columns;
    this.setDisplayedColumns(columns);
  }

  @Output() deleteClicked: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();
  @Output() editClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() detailsClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() refreshClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() customClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() columnActionClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectClicked: EventEmitter<any> = new EventEmitter<any>();

  isLoading = true;
  tableOptions: DataTable = {
    tableTitle: '',
    isDisplaytitle: false,
    isRefresh: false,
    isDownload: false,
    isSearchFilter: true,
    tableStyle: 'cozy-table',
    isSelectable: false,
    isMultiSelect: false,
    isActionable: false,
    isEditable: false,
    isViewDetails: false,
    searchParams: {},
    isUpdateRow: false,
    isDeleteRow: false,
    isCreateRow: false,
    columnModel: [],
    actions: {},
    isDeletable: false,
    isCustom: false,
    customIcon: '',
    customLabel: '',
    customDependsOn: null,
    excelName: null,
    isPagination: true
  };

  displayedColumns: string[];
  columnsData: any[];
  showCreateNew = false;
  newRow: any = {};
  selection = new SelectionModel<any>(true, []);
  deleteRow: any;

  constructor(
    public snackBar: MatSnackBar,
    private ref: ChangeDetectorRef,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() { }

  setDisplayedColumns(columns) {
    this.displayedColumns = Object.keys(columns);
    if (this.tableOptions.isSelectable) {
      this.displayedColumns.unshift('select');
    }
    if (this.tableOptions.isEditable || this.tableOptions.isDeletable || this.tableOptions.isCustom) {
      this.displayedColumns.push('actions');
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
      this.selectClicked.emit(this.selection.selected);
  }

  onSelectRow(row) {
    this.selection.toggle(row);
    this.selectClicked.emit(this.selection.selected);
  }

  onDeleteMulti() {
    this.deleteClicked.emit(this.selection.selected);
  }

  onEditRow(item) {
    this.editClicked.emit(item);
  }

  onRefreshData() {
    this.isLoading = true;
    this.refreshClicked.emit();
  }

  onDeleteRow(row) {
    this.deleteClicked.emit([this.deleteRow]);
  }

  onCustomRow(item) {
    this.customClicked.emit(item);
  }

  onColumnActionClicked(item) {
    this.columnActionClicked.emit(item);
  }

  onDownloadData() {
    const data = this.dataSource.data;
    this.exportAsExcelFile(data, this.tableOptions.excelName);
  }

  onViewDetails(row) {
    this.detailsClicked.emit(row);
  }

  onSelectionChange() {
    console.log(this.selection.selected);
  }

  toExportFileName(excelFileName: string): string {
    return `${excelFileName || 'data'}_export_${new Date().getTime()}.xlsx`;
  }

  exportAsExcelFile(json, excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    XLSX.writeFile(workbook, this.toExportFileName(excelFileName));
  }

}
