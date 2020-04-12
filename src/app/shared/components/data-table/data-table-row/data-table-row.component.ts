import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cops-data-table-row',
  templateUrl: './data-table-row.component.html',
  styleUrls: ['./data-table-row.component.scss']
})
export class DataTableRowComponent implements OnInit {
  @Input() rowData;
  constructor() { }

  ngOnInit() {
  }

  typeOf(rowData) {
    if (Array.isArray(rowData)) {
      return 'array';
    } else if (typeof rowData === 'string') {
      if (rowData.split(',').length > 1) {
        return 'stringarray';
      } else if ((/^\d{4}(-\d\d(-\d\d(T\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d:\d\d)|Z)?)?)?)?$/i).test(rowData)) {
        return 'date';
      } else {
        return 'string';
      }
    } else {
      return typeof rowData;
    }
  }

}
