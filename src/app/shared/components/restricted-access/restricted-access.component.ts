import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cops-restricted-access',
  templateUrl: './restricted-access.component.html',
  styleUrls: ['./restricted-access.component.scss']
})
export class RestrictedAccessComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openCloudView() {
    const route = `inventory/compute`;
    this.router.navigate([route], { queryParams: {cloudView: true}});
  }
}
