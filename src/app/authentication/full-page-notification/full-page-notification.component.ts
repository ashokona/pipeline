import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cops-full-page-notification',
  templateUrl: './full-page-notification.component.html',
  styleUrls: ['./full-page-notification.component.scss']
})
export class FullPageNotificationComponent implements OnInit {
  @Input() icon: string;
  @Input() type: string;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() loading: boolean = true;
  @Input() action: string = '';
  @Output() actionClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onActionClick(e) {
    this.actionClicked.emit(e);
  }

}
