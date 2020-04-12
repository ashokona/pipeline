import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { list } from './exclusionList';

import { SecurityService } from '../../services/security.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'cops-exclusions',
  templateUrl: './exclusions.component.html',
  styleUrls: ['./exclusions.component.scss']
})
export class ExclusionsComponent implements OnInit {
  isRisksLoading = false;
  loadingState: string = 'loadingGraph';
  selectedExclusions = [];
  tableOptions = {
    tableTitle: 'Exclusions',
    isDisplaytitle: true,
    isRefresh: true,
    isDownload: true,
    isSelectable: true,
    isMultiSelect: false,
    isDeletable: false
  };
  tableData: any[];
  displayedRiskColumns: any = {
    display: {
      displayName: 'Rulename',
    }
  };

  constructor(
    public dialog: MatDialog,
    private SecurityService: SecurityService,
    private toaster: ToastrService
  ) { }

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.isRisksLoading = true;
    var neww = [];
    list.map(a => {
      neww.push({key: a.Checkname, display:a.Checkname.replace(/_/g,' ').toUpperCase()})
    })
    this.tableData = neww;
    this.isRisksLoading = false;
  }

  onRefreshData(){
    this.loadData();
  }

  onSelection(event){
    this.selectedExclusions = event;
  }

  saveExclusions() {
    this.loadingState = 'loadingGraph';
    this.isRisksLoading = true;
    var sendData = []
    this.selectedExclusions.map(each => {
      sendData.push(each.key)
    });
    this.SecurityService.saveExclusions(sendData).subscribe(
      res => {
        this.toaster.success('Exclusions saved', '', { timeOut: 3000});
        this.loadingState = null;
        this.isRisksLoading = false;
      },
      err => {
        this.toaster.error('Failed to save Exclusions', '', { timeOut: 3000});
        this.loadingState = null;
        this.isRisksLoading = false;
      }
    )
  }
}
