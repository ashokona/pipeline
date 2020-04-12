import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cops-content-state',
  templateUrl: './content-state.component.html',
  styleUrls: ['./content-state.component.scss']
})
export class ContentStateComponent implements OnInit {
  @Input('state') state = 'loading';

  constructor() { }

  ngOnInit() {}

  ngOnChanges() {
  }

}
