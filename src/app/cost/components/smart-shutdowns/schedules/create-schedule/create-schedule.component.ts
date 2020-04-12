import { Component, OnInit, Inject, ViewChild, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cost } from '../../../../models/cost.model';
import { CostService } from '../../../../services/cost.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'cops-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateScheduleComponent implements OnInit {
  scheduleForm: FormGroup;
  @ViewChild('group', null) group;
  startTime: Date = new Date();
  stopTime: Date = new Date();
  daysSelecterDisabled: Boolean = false;
  daySelecterLabel: String = 'SELECT SHUTDOWN DAY';
  weekdays: any[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  isLoading: boolean = false;
  editValue: String = 'reset';
  create_edit_button: String = 'Create Schedule';

  isEdit: Boolean = false;
  @Input() schedule: any;
  

  @Output() scheduleDone: EventEmitter<any> = new EventEmitter<any>();

  scheduleDetails = {
    schedule_name: 'S2',
    start: {
      minute: null,
      hour: null,
      day: '*',
      month: '*',
      weekday: null,
      job_name: 'start_ec2'
    },
    stop: {
      minute: null,
      hour: null,
      day: '*',
      month: '*',
      weekday: null,
      job_name: 'start_ec2'
    },
    on_demand:false,
    job:'temp_job'
  }

  days = [
    { name: 'Monday', value: 0 },
    { name: 'Tuesday', value: 1 },
    { name: 'Wednesday', value: 2 },
    { name: 'Thursday', value: 3 },
    { name: 'Friday', value: 4 },
    { name: 'Saturday', value: 5 },
    { name: 'Sunday', value: 6 }
  ]
  // cost: Cost;

  ngOnInit() {
    this.initaliseAccountForm();
  }

  initaliseAccountForm() {
    // console.log(this.schedule);
    if (this.schedule) {
      this.isEdit = true;
      this.editValue = 'Change Shutdown/Startup day';
      this.create_edit_button = 'Update Schedule';
      this.startTime = new Date(this.schedule.NextStart);
      this.stopTime = new Date(this.schedule.NextEnd);
      // console.log(this.startTime)
      this.scheduleForm = this.formBuilder.group({
        name: new FormControl({ value: this.schedule.ScheduleName, disabled: true }, Validators.required),
        days: new FormControl({value: [this.schedule.StopWeekDay,this.schedule.StartWeekDay], disabled: false}, Validators.required),
        stopTime: new FormControl(this.stopTime, Validators.required),
        startTime: new FormControl(this.startTime, Validators.required)
      });

      this.onDaySelect();
    }
    else {
      this.isEdit = false;
      this.scheduleForm = this.formBuilder.group({
        name: new FormControl('', Validators.required),
        days: new FormControl({value: '', disabled: false}, Validators.required),
        stopTime: new FormControl('', Validators.required),
        startTime: new FormControl('', Validators.required)
      });
      this.startTime.setHours(0, 0, 0, 0);
      this.stopTime.setHours(0, 0, 0, 0);
    }
  }

  onDaySelect() {
    const selectedDays = this.scheduleForm.value.days;
    if (selectedDays.length === 1) {
      this.changeDaysOrder(selectedDays[0]);
      // this.daySelecterLabel = 'SELECT STARTUP DAY';
    }
    if (selectedDays.length === 2) {
      this.daysSelecterDisabled = true;
      this.scheduleForm.controls['days'].disable();
      // this.daySelecterLabel = `Resources SHUTDOWN on ${this.weekdays[selectedDays[0]]} and STARTUP on ${this.weekdays[selectedDays[1]]}.`;
    }
  }

  changeDaysOrder(day) {
    const index = this.days.findIndex(x => x.value === day);
    const spliced = this.days.splice(0, index);
    this.days = this.days.concat(spliced);
  }

  onClearDaysSelected() {
    this.changeDaysOrder(0);
    this.group.value = [];
    this.daysSelecterDisabled = false;
    this.daySelecterLabel = 'SELECT SHUTDOWN DAY';
    this.scheduleForm.controls['days'].enable();
  }

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private costService: CostService
  ) { 
    // this.cost = new Cost();
  }

  onCancel(): void {
    console.log("Create Schedule");
    // this.cost.isLoading = false;
  }

  onCreateSchedule() {
    const formData = this.scheduleForm.getRawValue();
    if (this.scheduleForm.valid) {
      // this.cost.isLoading = true;
      this.isLoading = true;
      this.formatNewScheduleData(formData);
      if(!this.isEdit){
        this.costService.addSchedule(this.scheduleDetails).subscribe(
          res => {
            // console.log(res);
            this.onCancel();
            this.toastr.success('Schedule added successfully', '', { timeOut: 3000 });
            this.isLoading = false;
            this.scheduleDone.emit(res.Data);
          },
          err => {
            // this.cost.isLoading = false;
            this.isLoading = false;
            this.toastr.error('Failed to add schedule', '', { timeOut: 10000 });
          }
        );
      }else{
        console.log("InEdit");
        this.costService.updateSchedule(this.scheduleDetails).subscribe(
          res => {
            // console.log(res);
            this.onCancel();
            this.toastr.success('Schedule updated successfully', '', { timeOut: 3000 });
            this.isLoading = false;
            this.scheduleDone.emit(res.Data);
          },
          err => {
            // this.cost.isLoading = false;
            this.isLoading = false;
            this.toastr.error('Failed to update schedule', '', { timeOut: 10000 });
          }
        );
      }
    }
  }

  timeOnChange(event) {
    console.log(event);

  }

  formatNewScheduleData(formData) {
    this.scheduleDetails.schedule_name = formData.name;
    this.scheduleDetails.stop.hour = formData.stopTime.getHours();
    this.scheduleDetails.stop.minute = formData.stopTime.getMinutes();
    this.scheduleDetails.start.hour = formData.startTime.getHours();
    this.scheduleDetails.start.minute = formData.startTime.getMinutes();
    this.scheduleDetails.stop.weekday = formData.days[0];
    this.scheduleDetails.start.weekday = formData.days[1];
  }  

  onStopTimeChange(e) {
    this.stopTime = e.value;
  }

  onStartTimeChange(e) {
    this.startTime = e.value;
  }
}
