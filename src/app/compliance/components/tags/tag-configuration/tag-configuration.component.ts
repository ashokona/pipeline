import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TagsService } from 'src/app/compliance/services/tags.service';
import { BroadcasterService } from 'src/app/shared/services/broadcaster.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'cops-tag-configuration',
  templateUrl: './tag-configuration.component.html',
  styleUrls: ['./tag-configuration.component.scss']
})
export class TagConfigurationComponent implements OnInit, OnDestroy {

  @Input() resourceType;
  tag: any;
  manageTag: Boolean = false;
  // isLoading = true;

  tableOptions = {
    tableTitle: 'Tags Config',
    isDisplaytitle: true,
    isRefresh: true,
    isDownload: true,
    isSelectable: true,
    isMultiSelect: true,
    isEditable: true,
    isDeletable: true
  };

  tagData: any[];
  recommendedTagData: any[] = [];

  displayedColumns: any = {
    name: {
      displayName: 'Name',
    },
    type: {
      displayName: 'type',
    }
  };
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private tagsService: TagsService,
    private toastr: ToastrService,
    private broadCaster: BroadcasterService
  ) { }

  ngOnInit() {
    this.getTagData();
    this.broadCaster.onGroupChange().pipe(takeUntil(this.destroy$)).subscribe((payload) => {
      this.getTagData();
    });
  }

  getTagData() {
    // this.isLoading = true;
    this.tagsService.getTags(this.resourceType).subscribe(
      res => {
        this.tagData = res.data;
        this.getRecommendedTags();
      },
      err => {
        console.log(err);
        // this.isLoading = false;
      }
    );
  }

  getRecommendedTags() {
    this.tagsService.getTags('all').subscribe(
      res => {
        this.recommendedTagData = res.data;
        // this.isLoading = false;
      },
      err => {
        console.log(err);
        // this.isLoading = false;
      }
    );
  }

  onNewTag() {
    this.manageTag = true;
  }

  onEditTag(tag) {
    this.manageTag = true;
    this.tag = tag;
  }

  onCancelTag(tag) {
    this.manageTag = false;
    this.tag = null;
    if (tag) {
      const index = this.tagData.findIndex(value => value._id === tag._id);
      if (~index) {
        this.tagData[index] = tag;
      } else {
        this.tagData = [...this.tagData, tag];
      }
    }
  }

  onRefreshTags(e) {
    this.getTagData();
  }

  onDeleteTag(tag) {
    console.log(tag);
    this.tagsService.removeTags(tag).subscribe(
      res => {
        console.log(res);
        this.toastr.success(res.message, '');
        this.tagData = this.tagData.filter((item) => tag.indexOf(item) < 0);
      },
      err => {
        console.log(err);
        this.toastr.error(err.error.message, '');
      }
    );
  }

  addRecommendedTags() {
    const groupId = JSON.parse(localStorage.getItem('groupId'));
    let recommendedTag = []
    for (let tag of this.recommendedTagData) {
      tag.group = groupId;
      tag.resourceType = this.resourceType;
      recommendedTag.push(tag);
    }
    this.tagsService.addRecommendedTags(recommendedTag).subscribe(
      res => {
        this.getTagData();
        this.tagsService.loader.next(false);
      },
      err => {
        console.log(err);
        this.tagsService.loader.next(false);
      }
    );
  }

  getTagDetails(tag) {
    const options = tag.options.length ? `(${tag.options.join(', ')})` : '';
    return `${tag.name} ${options}`;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
