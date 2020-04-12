import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Settings } from '../../../../../settings/models/settings.model';
import { TagsService } from 'src/app/compliance/services/tags.service';

@Component({
  selector: 'cops-manage-tag',
  templateUrl: './manage-tag.component.html',
  styleUrls: ['./manage-tag.component.scss']
})
export class ManageTagComponent implements OnInit {
  @Input() tag: any;
  @Input() resourceType: any;
  @Output() cancelClicked: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('optionInput', null) optionInput: ElementRef;
  settings: Settings;
  isLoading: Boolean = false;
  tagForm: FormGroup;
  isEdit: Boolean = false;
  types = [{ id: 'text', name: 'Text' }, { id: 'select', name: 'Select' }];

  constructor(
    private formBuilder: FormBuilder,
    private tagsService: TagsService,
    private toastr: ToastrService
  ) {
    this.settings = new Settings();
  }
  ngOnInit() {
    this.initaliseTagForm();
  }

  initaliseTagForm() {
    const groupId = JSON.parse(localStorage.getItem('groupId'));
    if (this.tag) {
      this.isEdit = true;
      this.tagForm = this.formBuilder.group({
        name: new FormControl(this.tag.name, Validators.required),
        value: new FormControl(this.tag.value),
        group: new FormControl(this.tag.group, Validators.required),
        resourceType: new FormControl(this.tag.resourceType, Validators.required),
        type: new FormControl(this.tag.type, Validators.required),
        options: new FormControl(this.tag.options)
      });
    }
    else {
      this.isEdit = false;
      this.tagForm = this.formBuilder.group({
        name: new FormControl('', Validators.required),
        value: new FormControl(''),
        group: new FormControl(groupId, Validators.required),
        resourceType: new FormControl(this.resourceType, Validators.required),
        type: new FormControl('', Validators.required),
        options: new FormControl([])
      });
    }
  }

  addOrEditTag() {
    this.settings.isLoading = true;
    if (this.isEdit) {
      this.editTag();
    } else {
      this.addTag();
    }
  }

  addTag() {
    const tag = this.tagForm.value;
    this.tagsService.addTag(tag).subscribe(
      res => {
        this.onCancel();
        this.toastr.success(res.message, '');
        this.tag = res.data;
        this.cancelClicked.emit(this.tag);
      },
      err => {
        this.settings.isLoading = false;
        console.log(err);
        this.toastr.error(err.error.message, '');
      }
    )
  }

  editTag() {
    const editedTag = { ...this.tagForm.getRawValue(), _id: this.tag._id };
    if (editedTag.name === this.tag.name && editedTag.value === this.tag.value
      && editedTag.group === this.tag.group && editedTag.type === this.tag.type && editedTag.options === this.tag.options) {
      this.settings.isLoading = false;
      this.cancelClicked.emit();
    }
    this.isLoading = true;
    this.tagsService.updateTag(editedTag).subscribe(
      res => {
        this.isLoading = false;
        this.toastr.success(res.message, '');
        this.tag.name = editedTag.name;
        this.tag.value = editedTag.value;
        this.tag.group = editedTag.group;
        this.tag.type = editedTag.type;
        this.tag.options = editedTag.options;
        this.cancelClicked.emit(this.tag);
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

  addOption() {
    let currentOptions = this.tagForm.controls.options.value;
    currentOptions.push(this.optionInput.nativeElement.value);
    this.tagForm.patchValue({ options: currentOptions });
    this.optionInput.nativeElement.value = '';
  }

  removeOption(index, value) {
    let currentOptions = this.tagForm.controls.options.value;
    currentOptions.splice(index, 1);
    this.tagForm.patchValue({ options: currentOptions });
  }

}
