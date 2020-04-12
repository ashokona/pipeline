import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cops-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() rowData: any;
  @Output() backClicked: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();

  constructor() { }

  ngOnInit() {
  }

  getColumnDetails(rowData) {
    return Object.keys(rowData);
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
  onGoBack() {
    this.backClicked.emit();
  }
}
