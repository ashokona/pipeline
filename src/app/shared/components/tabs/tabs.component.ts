import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tab } from '../../models/tabs';

@Component({
  selector: 'cops-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @Input() tabs: Tab[];
  @Input() selectedIndex: Number = 0;
  @Output() tabChange: EventEmitter<Tab> = new EventEmitter<Tab>();

  constructor() { }

  onTabChanged(e) {
    this.selectedIndex = e.index;
    this.tabChange.emit(this.tabs[e.index]);
  }

}
