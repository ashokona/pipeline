import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SettingsService } from '../../../services/settings.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Settings } from '../../../models/settings.model';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import { SubscriptionModel } from 'src/app/settings/models/subscritption';

@Component({
  selector: 'cops-edit-subscription',
  templateUrl: './edit-subscription.component.html',
  styleUrls: ['./edit-subscription.component.scss']
})
export class EditSubscriptionComponent implements OnInit {
  @Input() subscription: SubscriptionModel;
  @Output() cancelClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateTable: EventEmitter<any> = new EventEmitter<any>();
  settings: Settings;

  subscriptionForm: FormGroup;
  isEdit: Boolean = false;
  licenceTypes: any[] = [
    { value: 'basic', name: 'basic' },
    { value: 'premium', name: 'premium' }
  ]
  constructor(
    private formBuilder: FormBuilder,
    private settingsSerivce: SettingsService,
    private userService: UserService,
    private toastr: ToastrService,
  ) {
    this.settings = new Settings();
  }

  ngOnInit() {
    this.initaliseSubscriptionForm();
  }

  initaliseSubscriptionForm() {
    if (this.subscription) {
      this.subscriptionForm = this.formBuilder.group({
        subscriptionId: new FormControl(this.subscription.subscriptionId),
        licenceType: new FormControl(this.subscription.licenceType)
      });
    }
  }

  editSubscription() {
    this.settings.isLoading = true;
    this.editGroup();
  }

  editGroup() {
    const subscriptionData = this.subscriptionForm.value;
    this.settingsSerivce.updateSubscription(subscriptionData).subscribe(
      res => {
        this.toastr.success(res.message, '', { timeOut: 3000 });
        this.updateTable.emit(subscriptionData);
        this.onCancel();
      },
      err => {
        console.log(err);
      }
    )
  }

  onCancel() {
    this.settings.isLoading = false;
    this.cancelClicked.emit();
  }
}
