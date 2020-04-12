import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SettingsService } from '../../../services/settings.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Settings } from '../../../models/settings.model';

@Component({
  selector: 'cops-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {
  @Input() user: any;
  @Input() groups: any[];
  @Output() cancelClicked: EventEmitter<any> = new EventEmitter<any>();
  settings: Settings;
  isLoading: Boolean = false;
  currentuser: any;
  userForm: FormGroup;
  isEdit: Boolean = false;
  roles: any[] = [
    { value:'admin', name: 'ADMIN' },
    { value:'user', name: 'USER' },
    { value:'readonly', name: 'READONLY' },
  ]
  constructor(
    private formBuilder: FormBuilder,
    private settingsSerivce: SettingsService,
    private userService: UserService,
    private toastr: ToastrService
  ) { 
    this.settings = new Settings();
  }

  ngOnInit() {
    this.initaliseAccountForm();
    this.currentuser = this.userService.currentUser.value;
  }

  initaliseAccountForm() {
    if(this.user) {
      this.isEdit = true;
      this.userForm = this.formBuilder.group({
        email: new FormControl({value: this.user.email , disabled: true}, [Validators.required, Validators.email]),
        role: new FormControl(this.user.role, Validators.required),
        groups: new FormControl(this.user.groups)
      });
    }
    else {
      this.isEdit = false;
      this.userForm = this.formBuilder.group({
        email: new FormControl('', Validators.required),
        role: new FormControl('', Validators.required),
        groups: new FormControl('', Validators.required)
      });
    }
  }

  addOrEditUser() {
    this.settings.isLoading = true;
    if(!this.isEdit) {
      this.addUser();
    } else {
      this.editUser();
    }
  }

  addUser() {
    const user = this.userForm.value;
    user.companyName = this.currentuser.companyName;
    this.settingsSerivce.addUser(user).subscribe(
      res => {
        console.log(res);
        this.onCancel();
        this.toastr.success(res.message, '');
        this.user = res.data;
        this.user.groupNames = this.groups.filter(group => this.user.groups.indexOf(group._id) > -1).map(group => group.groupName);
        this.cancelClicked.emit(this.user);
      },
      err => {
        this.settings.isLoading = false;
        console.log(err);
        this.toastr.error(err.error.message, '');
      }
    )
  }

  editUser() {
    const editedUser = this.userForm.getRawValue();
    if(editedUser.role === this.user.role && editedUser.groups === this.user.groups) {
      return;
    }
    this.isLoading = true;
    this.settingsSerivce.updateUser(editedUser).subscribe(
      res => {
        console.log(res);
        this.isLoading = false;
        this.toastr.success(res.message, '');
        this.user.role = editedUser.role;
        this.user.groups = editedUser.groups;
        this.user.groupNames = this.groups.filter(group => this.user.groups.indexOf(group._id) > -1).map(group => group.groupName);
        this.cancelClicked.emit(this.user);
      },
      err => {
        console.log(err);
        this.settings.isLoading = false;
        this.isLoading = false;
        this.toastr.error(err.error.message, '')
      }
    )
  }

  onCancel() {
    this.settings.isLoading = false;
    this.cancelClicked.emit();
  }

}
