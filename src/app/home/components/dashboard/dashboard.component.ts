import { Component, OnInit } from '@angular/core';
import { DownloadReportsService } from '../../../shared/services/download-reports.service';

@Component({
  selector: 'cops-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showDownloadLocation: Boolean = false;

  constructor(
    private downloadReportsService: DownloadReportsService
  ) {}


  ngOnInit() {

  }

  onManageAccount() {

  }
  onDownload() {
    const doc = document.getElementById('container');
    this.downloadReportsService.downloadReport(doc, 'Dashboard Report' , 'cops-dashboard');
  }
}
