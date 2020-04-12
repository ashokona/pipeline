import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Sort } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CostService } from '../../../services/cost.service';
import { CreateScheduleComponent } from './create-schedule/create-schedule.component';
import { AddInstancesComponent } from './add-instances/add-instances.component';
import { BroadcasterService } from '../../../../shared/services/broadcaster.service';
import { CostDashboardService } from '../../../services/cost-dashboard.service';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment-timezone';
import cronstrue from 'cronstrue';


@Component({
  selector: 'cops-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit, OnDestroy {
  manageSchedule: Boolean = false;
  selected = new FormControl(0);
  tableData: any[];
  schedule: any;
  days = [
    { name: 'Monday', value: 0 },
    { name: 'Tuesday', value: 1 },
    { name: 'Wednesday', value: 2 },
    { name: 'Thursday', value: 3 },
    { name: 'Friday', value: 4 },
    { name: 'Saturday', value: 5 },
    { name: 'Sunday', value: 6 }
  ]

  tableOptions = {
    tableTitle: 'Unused',
    isDisplaytitle: true,
    isRefresh: true,
    isDownload: true,
    isSelectable: true,
    isMultiSelect: true,
    isEditable: true,
    // isCustom: true,
    // customIcon: 'add_to_queue',
    // customLabel: 'Add Instances',
    isDeletable: true
  };

  displayedColumns: any = {
    ScheduleName: {
      displayName: 'Schedule Name',
      // sort: true
    },
    NoOfHours: {
      displayName: 'Hours Saved',
    },
    Savings: {
      displayName: 'Savings'
    },
    instance_count: {
      displayName: 'Instance Count'
    },
    endDayTime: {
      displayName: 'Shutdown',
      // type: 'date',
      // type: 'format'
    },
    startDayTime: {
      displayName: 'StartUp',
      // type: 'date'
    },
    
  };
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    public dialog: MatDialog,
    public costService: CostService,
    private toastr: ToastrService,
    private broadCaster: BroadcasterService,
    private readonly costDashboardService: CostDashboardService
  ) { }

  ngOnInit() {
    this.initSchedules();
    this.broadCaster.onGroupChange().pipe(takeUntil(this.destroy$)).subscribe((payload) => {
      this.initSchedules();
    });
  }

  initSchedules() {
    // this.costService.loader.next(true);
    this.costService.getSchedules().subscribe(
      res => {
        // console.log(res);
        //this.tableData = res.Data || [];
        var results = res.Data || [];
        results.map(x => { x['endDayTime'] = cronstrue.toString(x.EndExpression).replace('only on', ''), x['startDayTime'] = cronstrue.toString(x.StartExpression).replace('only on', '')});
        this.tableData = results.sort((a, b) => a.ScheduleName.localeCompare(b.ScheduleName));
        this.costDashboardService.setSavings();
        
        this.costService.loader.next(false);
      },
      err => {
        console.log(err);
        this.tableData = [];
        this.costDashboardService.setSavings();
        this.costService.loader.next(false);
      }
    )
  }

  getTime(proposedData,day){
    var date = new Date(proposedData);
    // console.log(date.toLocaleTimeString())
    var momentDate = moment(proposedData);
    // console.log(Date.parse(proposedData))
    // moment(proposedData).format();
    var weekday = this.days.filter(a => { return a.value === day })
    
    return weekday[0]['name']+", "+momentDate.format("hh:mm A");
  }

  onRefreshSchedules() {
    this.initSchedules();
  }

  onRowSelected(selected) {
    console.log(selected);
  }

  onTabChanged(e) {
    console.log(e);
  }

  onManageSchedule() {
    this.manageSchedule = !this.manageSchedule;
    this.schedule = null;
  }

  onCancelNewSchedule() {
    console.log("in new schedule");
    this.manageSchedule = !this.manageSchedule;
    this.initSchedules();
  }

  onDelteData(e) {
    var scheduleId = [];
    e.map((each) => {
      scheduleId.push(each.ScheduleId);
    });
    var data = {
      "schedule_id": scheduleId
    }

    this.costDashboardService.deleteSchedule(data).subscribe(
      res => {
        // console.log(res);
        // this.tableData.splice(this.tableData.findIndex(data => data['_id'] === e[0]['_id']), 1);
        // this.tableData = this.tableData.filter(data => data);
        this.initSchedules();
        this.toastr.success('Schedule deleted successfully', '');
      },
      err => {
        console.log(err);
        this.toastr.error('error while deleting schedule', '');
      }
    )
  }

  onEditSchedule(schedule) {
    // console.log(schedule);
    this.manageSchedule = !this.manageSchedule;
    this.schedule = schedule;
  }


  onAddInstances(e) {
    // console.log(e);
    const dialogRef = this.dialog.open(AddInstancesComponent, {
      width: '80%',
      height: '80%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  onAddSchedule(): void {
    const dialogRef = this.dialog.open(CreateScheduleComponent, {
      width: '70%',
      height: '70%',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.initSchedules();
      // this.animal = result;
    });
  }

  onManageScheudleDone(schedule) {
    // console.log(schedule);
    this.onRefreshSchedules();
    this.tableData.push(schedule);
    this.manageSchedule = false;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}