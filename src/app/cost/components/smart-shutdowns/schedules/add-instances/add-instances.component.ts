import { Component, OnInit, Inject, ViewEncapsulation, ViewChild, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CostService } from '../../../../services/cost.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import {COMMA, ENTER, SEMICOLON} from '@angular/cdk/keycodes';
import {MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete} from '@angular/material';

@Component({
  selector: 'cops-add-instances',
  templateUrl: './add-instances.component.html',
  styleUrls: ['./add-instances.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddInstancesComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  addInstancesCtrl = new FormControl();
  filteredInstances: Array<any>;
  selectedInstances: any = [];
  instances: any = [];
  isLoading:boolean = false;
  deletedInstances: any = [];
  @Input() schedule: any;
  @ViewChild('instancesInput', null) instancesInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', null) matAutocomplete: MatAutocomplete;
  @Output() addInstancesDone: EventEmitter<any> = new EventEmitter<any>();

  // selected = new FormControl(0);
  separatorKeysCodesc = [ENTER, COMMA, SEMICOLON];


  constructor(
    private costService: CostService,
    private toaster: ToastrService
  ) {
    this.addInstancesCtrl.valueChanges.pipe(
      startWith(null),
      map((instance: any | null) => instance ? this._filter(instance) : this.instances.slice())).subscribe(res => 
        {
          this.filteredInstances = res;
        });
  }

  ngOnInit() {
    this.initInstances();
  }


  initInstances() {
    this.costService.getInstances().subscribe(
      res => {
        // console.log("res",res)
        this.instances = res.Data;
        // console.log(this.instances)
        if(this.schedule){
          this.editOnAdd();
        }
      },
      err => {
        console.log(err);
      }
    )
  }

  onAddInstances() {
    if(this.deletedInstances.length > 0){
      this.isLoading = true;
      const data ={
        schedule_id: this.schedule.ScheduleId,
        instances: this.deletedInstances.map(ins => ins.InstanceId)
      }
      this.costService.deleteInstanceFromSchedule(data).subscribe(
        res => {
          this.toaster.success('Instance deleted from schedule successfully', '', { timeOut: 3000});
          this.isLoading = false;
          this.addInstancesDone.emit(this.schedule);
        },
        err => {
          console.log(err);
          this.toaster.error('Failed to delete instance from schedule', '', { timeOut: 10000});
          this.isLoading = false;
        }
      )
    }
    if(this.selectedInstances.length > 0) {
      this.isLoading = true;
      const data = {
        schedule_id: this.schedule.ScheduleId,
        resources: this.selectedInstances.map(ins => ins.InstanceId)
      }
      this.costService.addInstancesToSchedule(data).subscribe(
        res => {
          // console.log(res);
          this.toaster.success('Resources added to schedule successfully', '', { timeOut: 3000 });
          this.addInstancesDone.emit(this.schedule);
          this.isLoading = false;
        },
        err => {
          console.log(err);
          this.toaster.error('Failed to add resources to schedule', '', { timeOut: 10000 });
          this.isLoading = false;
        }
      )
    }
  }

  editOnAdd(){
    var values = this.schedule.instances;
    values.map((each) => {
      let d = this.instances.filter((ins) => {
        return ins.InstanceId === each
      })
      this.selectedInstances.push(d[0]);
      this.instancesInput.nativeElement.value = '';
      this.addInstancesCtrl.setValue(null);
      const index = this.instances.indexOf(d[0]);
      this.instances.splice(index, 1);
      })
    }

  add(event: MatChipInputEvent): void {
    // Add instance only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const values = event.value.split(',');
      values.map( v => v.trim());
      if(values.length > 0) {
        const filteredInstances = this.instances.filter((instance) => {
          return values.indexOf(instance.InstanceId) >= 0; 
        });
        this.selectedInstances = this.selectedInstances.concat(filteredInstances)
        filteredInstances.forEach(ins => {
          const index = this.instances.indexOf(ins);
          this.instances.splice(index, 1);
        });
      }
      if (input) {
        input.value = '';
      }
      this.addInstancesCtrl.setValue(null);
    }
  }

  paste(event: ClipboardEvent): void {
    console.log(event)
    event.preventDefault();
    event.clipboardData
    .getData('Text')
    .split(/;|,|\n/)
    .forEach(value => {
      if(value.trim()){
        value = value.trim();
          let d = this.instances.filter((ins) => {
            return ins.InstanceId === value
          });
          console.log(d)
          if(d[0]){
            this.selectedInstances.push(d[0]);
            this.instancesInput.nativeElement.value = '';
            this.addInstancesCtrl.setValue(null);
            const index = this.instances.indexOf(d[0]);
            this.instances.splice(index, 1);
          }
        // this.selectedInstances.push({ name: value.trim() });
      }
    })
  }

  remove(instance: any): void {
    const index = this.selectedInstances.indexOf(instance);
    const editIndex = this.schedule.instances.indexOf(instance.InstanceId);

    if(editIndex >= 0){
      this.deletedInstances.push(instance);
    }
   
    if (index >= 0) {
      this.selectedInstances.splice(index, 1);
      this.instances.push(instance);
      this.filteredInstances.push(instance);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedInstances.push(event.option.value);
    this.instancesInput.nativeElement.value = '';
    this.addInstancesCtrl.setValue(null);
    const index = this.instances.indexOf(event.option.value);
    this.instances.splice(index, 1);
    this.filteredInstances = this.filteredInstances.filter(inst => inst !== event.option.value);
  }

  private _filter(value: any): any[] {
    const filterValue = value;

    return this.instances.filter(instance => instance.InstanceId.indexOf(filterValue) === 0);
  }
}

  // tableOptions = {
  //   tableTitle: 'Unused',
  //   isDisplaytitle: true,
  //   isRefresh: true,
  //   isSelectable: true,
  //   isMultiSelect: true
  // };
  // tableData: any[] = [
  //   {
  //     name: 'COPS-dev-234',
  //     savings: 23,
  //     createdBy: 'sai@mops.com',
  //     instances: 5
  //   },
  //   {
  //     name: 'COPS-prod-439',
  //     savings: 66,
  //     createdBy: 'raj@mops.com',
  //     instances: 10
  //   }
  // ];
  // displayedColumns: any = {
  //   name: {
  //     displayName: 'Name',
  //   },
  //   savings: {
  //     displayName: 'Hours Saved (Per MOnth)',
  //   },
  //   createdBy: {
  //     displayName: 'Created By',
  //   },
  //   instances: {
  //     displayName: 'Instances',
  //   },
  // };