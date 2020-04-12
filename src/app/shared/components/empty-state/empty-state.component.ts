import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'cops-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss']
})
export class EmptyStateComponent {
  @Input() icon: String;
  @Input() title: String;
  @Input() description: String;
  @Input() action: String;
  @Output() actionClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  onActionClicked(e) {
    this.actionClicked.emit(e);
  }

}
