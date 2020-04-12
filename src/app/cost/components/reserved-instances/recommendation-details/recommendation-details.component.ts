import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'cops-recommendation-details',
  templateUrl: './recommendation-details.component.html',
  styleUrls: ['./recommendation-details.component.scss']
})
export class RecommendationDetailsComponent {
  tableOptions = {
    tableStyle: 'normal-table',
    isPagination: false
    // tableTitle: 'Users',
    // isDisplaytitle: true,
    // isRefresh: true,
    // isDownload: true,
    // isCustom: true,
    // // isEditable: true,
    // customIcon: 'visibility',
    // customLabel: 'Add Instances',
  };
  displayedColumns = {
    OfferingType: { displayName: 'Offering Type' },
    standardWindowsOne: { displayName: 'Standard - Windows (1 Year)' },
    convertibleWindowsOne: { displayName: 'Convertiable - Windows (1 Year)' },
    standardLinuxOne: { displayName: 'Standard - UNIX/Linux (1 Year)' },
    convertibleLinuxOne: { displayName: 'Convertiable - UNIX/Linux (1 Year)' },
    standardWindowsThree: { displayName: 'Standard - Windows (3 Years)' },
    convertibleWindowsThree: { displayName: 'Convertiable - Windows (3 Years)' },
    standardLinuxThree: { displayName: 'Standard - UNIX/Linux (3 Years)' },
    convertibleLinuxThree: { displayName: 'Convertiable - Windows (3 Years)' },
    onDemandCost: { displayName: 'On Demand' },
  }
  constructor(
    public dialogRef: MatDialogRef<RecommendationDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
