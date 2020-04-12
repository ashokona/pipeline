import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class DownloadReportsService {

  constructor() { }

  downloadReport(documnet, heading, name ) {
    if (documnet) {
      html2canvas(documnet).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const document = new jsPDF('landscape');
        document.setTextColor(23, 77, 114);
        document.text(15, 15, heading);
        document.addImage(imgData, 'JPEG', 10, 25, 280, 180);
        document.save(`${name}.pdf`);
      });
    }
  }
}
