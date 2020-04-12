import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { NavItem } from '../../models/nav-item';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'cops-secondary-nav',
  templateUrl: './secondary-nav.component.html',
  styleUrls: ['./secondary-nav.component.scss']
})
export class SecondaryNavComponent {
  @Input() navItems: string;
  @Input() title: string;
  @Input() custom: any;
  @Output() navItemChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() customClicked: EventEmitter<any> = new EventEmitter<any>();


  constructor(
    private router: Router
  ) { }

  onNavItemChange(item) {
    this.navItemChanged.emit(item);
  }

  onCustom(){
    this.customClicked.emit();
  }

}
