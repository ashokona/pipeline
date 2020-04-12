import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'cops-manage-schedule',
  templateUrl: './manage-schedule.component.html',
  styleUrls: ['./manage-schedule.component.scss']
})
export class ManageScheduleComponent implements OnInit {
  manageScheduleStep = 0;
  enableAddInstances: Boolean = true;
  @Input() schedule: any;
  @Output() manageScheudleDone: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
  }

  onScheduleDone(schedule) {
    this.schedule = schedule;
    this.manageScheduleStep = 1;
  }

  setManageScheduleStep(d){

  }

  onAddInstancesDone(schedule) {
    this.manageScheudleDone.emit(schedule);
  }
}
