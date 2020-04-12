import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cops-row-card-item',
  templateUrl: './row-card-item.component.html',
  styleUrls: ['./row-card-item.component.scss']
})
export class RowCardItemComponent implements OnInit {
  @Input() data: any[];
  constructor() { }

  ngOnInit() {
  }

}
