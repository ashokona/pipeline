import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SettingsService } from '../../../services/settings.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Settings } from '../../../models/settings.model';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'cops-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss']
})
export class AddGroupComponent implements OnInit {
  @Input() user: any;
  @Input() groups: any[];
  @Output() cancelClicked: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('accountsInput', null) accountsInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', null) matAutocomplete: MatAutocomplete;
  @Output() updateTable: EventEmitter<any> = new EventEmitter<any>();
  settings: Settings;
  accountsCtrl: FormControl;
  separatorKeysCodes: number[];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  filteredAccounts: Array<any>;
  removedAccounts: any[];

  currentuser: any;
  groupForm: FormGroup;
  isEdit: Boolean = false;
  roles: any[] = [
    { value: 'admin', name: 'ADMIN' },
    { value: 'user', name: 'USER' },
    { value: 'readonly', name: 'READONLY' },
  ]
  groupStates = [{value: true, display: 'Yes'}, {value: false, display: 'No'}];
  constructor(
    private formBuilder: FormBuilder,
    private settingsSerivce: SettingsService,
    private userService: UserService,
    private toastr: ToastrService,
  ) {
    this.settings = new Settings();
    this.accountsCtrl = new FormControl('', Validators.required);
    // this.filteredAccounts = this.accountsCtrl.valueChanges.pipe(
    //   startWith(null),
    //   map((account: any | null) => account ? this._filter(account) : this.settings.accounts.slice()));
  }

  ngOnInit() {
    this.initaliseAccountForm();
    this.currentuser = this.userService.currentUser.value;
    this.separatorKeysCodes = [ENTER, COMMA];
    this.getAccountsData();
    this.removedAccounts = [];
  }

  initaliseAccountForm() {
    if (this.user) {
      this.isEdit = true;
      this.groupForm = this.formBuilder.group({
        groupName: new FormControl(this.user.groupName),
        readOnly: new FormControl(this.user.readOnly)
      });
      this.settings.selectedAccounts = this.user.accounts;
    }
    else {
      this.isEdit = false;
      this.groupForm = this.formBuilder.group({
        groupName: new FormControl('', Validators.required),
        readOnly: new FormControl(false)
      });
    }
  }

  addOrEditUser() {
    this.settings.isLoading = true;
    if (!this.isEdit) {
      this.addGorup();
    } else {
      this.editGroup();
    }
  }

  addGorup() {
    let group = this.groupForm.value;
    group.accounts = this.settings.selectedAccounts.map(value => value._id);
    this.settingsSerivce.addGroup(group).subscribe(
      res => {
        this.toastr.success(res.message, '', { timeOut: 3000 });
        this.updateTable.emit();
        this.onCancel();
      },
      err => {
        this.settings.isLoading = false;
        console.log(err);
      }
    )
  }

  editGroup() {
    let group = this.groupForm.value;
    this.user.groupName = group.groupName;
    this.user.readOnly = group.readOnly;
    this.user.accounts = this.settings.selectedAccounts.map(value => value._id);
    this.user.removedAccounts = this.removedAccounts;
    this.settingsSerivce.updateGroup(this.user).subscribe(
      res => {
        this.toastr.success(res.message, '', { timeOut: 3000 });
        this.updateTable.emit(this.user);
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

  getAccountsData() {
    this.settingsSerivce.getAccounts().subscribe(
      res => {
        this.settings.accounts = res.data;
        this.filteredAccounts = res.data.filter(acc =>
          !this.settings.selectedAccounts.find(selectedAcc => selectedAcc.AccountId === acc.AccountId));
      },
      err => {
        console.log(err);
      }
    )
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.settings.selectedAccounts.push(event.option.value);
    this.accountsInput.nativeElement.value = '';
    this.accountsCtrl.setValue(null);
    const index = this.settings.accounts.indexOf(event.option.value);
    this.settings.accounts.splice(index, 1);
    this.filteredAccounts = this.filteredAccounts.filter((acc) =>
      !(acc.AccountId === event.option.value.AccountId)
    );
  }

  add(event: MatChipInputEvent): void {
    // Add instance only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const values = event.value.split(',');
      values.map(v => v.trim());
      if (values.length > 0) {
        const filteredAccounts = this.settings.accounts.filter((account) => {
          return values.indexOf(account._id) >= 0;
        });
        this.settings.selectedAccounts = this.settings.selectedAccounts.concat(filteredAccounts);
        filteredAccounts.forEach(acc => {
          const index = this.settings.accounts.indexOf(acc);
          this.settings.accounts.splice(index, 1);
        });
      }
      if (input) {
        input.value = '';
      }
      this.accountsCtrl.setValue(null);
    }
  }

  remove(account: any): void {
    // const index = this.settings.selectedAccounts.indexOf(account);
    let index;
    this.settings.selectedAccounts.forEach((acc, ind) => {
      if (acc.AccountId === account.AccountId) {
        index = ind;
      }
    });
    if (this.user && this.removedAccounts.indexOf(account._id)) {
      this.removedAccounts.push(account._id);
    }
    if (index >= 0) {
      this.settings.selectedAccounts.splice(index, 1);
      this.settings.accounts.push(account)
      this.filteredAccounts.push(account)
    }
  }

  private _filter(value: any): any[] {
    const filterValue = value;

    return this.settings.accounts.filter(account => account.ResourceID.indexOf(filterValue) === 0);
  }
}
