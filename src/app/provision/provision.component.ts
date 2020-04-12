import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cops-provision',
  templateUrl: './provision.component.html',
  styleUrls: ['./provision.component.scss']
})
export class ProvisionComponent implements OnInit {
  module: String = 'provision';

  constructor() { }

  ngOnInit() {
  }

}
