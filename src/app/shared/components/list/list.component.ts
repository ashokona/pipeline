import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
@Component({
  selector: 'cops-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  length = 100;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  public array: any;
  // public displayedColumns = ['', '', '', '', ''];
  public dataSource: any;
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;
  private sortKey = null;
  private sortAsc = true;
  viewDetailsItem;
  pageEvent: PageEvent;
  panelOpenState = false;
  columnsData;
  filterValue = '';
  displayedColumns;
  linkDetails;
  selectedItem;
  fieldsToSkip = ['type', '_id', 'createdAt', 'Timestamp'];
  @Input() isLoading = true;
  @Input('columns')
  set columns(columns: any) {
    if (columns) {
      this.columnsData = columns;
      this.setDisplayedColumns(columns);
    }
  }
  @Input('data')
  set data(data) {
    if (data) {
      this.selectedItem = null;
      this.dataSource = new MatTableDataSource<Element>(data);
      this.dataSource.paginator = this.paginator;
      this.array = data;
      this.totalSize = this.array.length;
      this.iterator();

      // if (this.linkDetails) {
      //   this.selectedItem = data.filter(d => d[this.linkDetails.key] === this.linkDetails.value)[0];
      // }
    }
  }
  // @Input('selectedItem') selectedItem;
  @Output() linkClicked: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(MatPaginator, null) paginator: MatPaginator;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  listFilters: any[] = [];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.listFilters.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
    let data = this.dataSource.filter((contact) => {
      const contactValues = Object.values(contact);
      // Return the search item if at least one item matches
      // Would return true if at least one item matches
      return contactValues.some(value => this.listFilters.includes(value));
      // return true only if all search tags match
      // return contactValues.every(value => this.listFilters.includes(value));
      // return contactValues.every(value => this.listFilters.includes(value));
    })
    this.dataSource = data;
  }

  onSearch(event) {}

  remove(fruit: any): void {
    const index = this.listFilters.indexOf(fruit);

    if (index >= 0) {
      this.listFilters.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit() {

  }

  onItemClick(item) {
    // this.linkDetails = null;
    this.viewDetailsItem = item;
  }

  onLinkClick(key, value) {
    return;
    const details = {
      key, value,
      tab: this.columnsData[key].tab
    }
    this.linkDetails = details;
    this.linkClicked.emit(details);
  }

  setDisplayedColumns(columns) {
    this.displayedColumns = Object.keys(columns);
    this.fieldsToSkip = [...this.displayedColumns, ...this.fieldsToSkip];
    if (columns.Actions) {
      columns.Actions.map(action => { this.fieldsToSkip.push(action.columnId) })
    }
  }

  isDate(date) {
    return /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/i.test(date)
  }

  applyFilter(event: Event) {
    if((event.target as HTMLInputElement).value) {
      this.filterValue = (event.target as HTMLInputElement).value;
      this.filterData(this.filterValue)
    }
  }

  filterData(value) {
    let data = this.array.filter((contact) => {
      const contactValues = Object.values(contact).join();
      return contactValues.includes(value);
    });
    this.dataSource = data;
  }

  onSortList(key) {
    // if(this.sortKey && this.sortKey === key && this.sortAsc) {
    //   this.sortKey = null;
    //   this.sortAsc = true;
    //   this.data = this.array
    //   return
    // }
    if (this.sortKey !== key) {
      this.sortAsc = true;
    }
    this.sortKey = key;
    const sortedData = this.array.sort((a, b) => {
      return this.compare(a[key], b[key], this.sortAsc)
    });
    this.dataSource = sortedData;
    this.sortAsc = !this.sortAsc;
    this.handlePage({ pageIndex: this.currentPage, pageSize: this.pageSize });
    this.filterData(this.filterValue)
  }
  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.array.slice(start, end);
    this.dataSource = part;
  }
  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }

  private compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
