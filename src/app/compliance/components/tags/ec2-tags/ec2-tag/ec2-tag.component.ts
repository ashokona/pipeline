import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Settings } from '../../../../../settings/models/settings.model';
import { TagsService } from 'src/app/compliance/services/tags.service';

@Component({
  selector: 'cops-ec2-tag',
  templateUrl: './ec2-tag.component.html',
  styleUrls: ['./ec2-tag.component.scss']
})
export class EC2TagComponent implements OnInit {
  @Input() instance: any;
  @Output() cancelClicked: EventEmitter<any> = new EventEmitter<any>();
  settings: Settings;
  isLoading: Boolean = false;
  tagForm: FormGroup;
  isEdit: Boolean = false;

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
    if (this.instance) {
      this.isEdit = true;
      this.tagForm = this.formBuilder.group({
        _id: new FormControl(this.instance._id, Validators.required),
        Region: new FormControl(this.instance.Region, Validators.required),
        AccountId: new FormControl(this.instance.AccountId, Validators.required),
        InstanceId: new FormControl(this.instance.InstanceId, Validators.required),
        key: new FormControl(this.instance.key, Validators.required),
        value: new FormControl(this.instance.value, Validators.required),
        tags: new FormControl(this.instance.Tags),
        type: new FormControl(this.instance.type, Validators.required),
        options: new FormControl(this.instance.options)
      });
    }
  }

  editTag() {
    const editedTag = { ...this.tagForm.getRawValue() };
    editedTag.tags = [...editedTag.tags, {Key: editedTag.key, Value: editedTag.value}]
    this.isLoading = true;
    this.tagsService.updateEC2Tag(editedTag).subscribe(
      res => {
        this.isLoading = false;
        this.toastr.success(res.message, '');
        this.instance.value = editedTag.value;
        this.cancelClicked.emit(this.instance);
      },
      err => {
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
