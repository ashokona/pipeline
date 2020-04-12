import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'cops-configure-account',
  templateUrl: './configure-account.component.html',
  styleUrls: ['./configure-account.component.scss']
})
export class ConfigureAccountComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfigureAccountComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
