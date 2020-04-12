import { Component, OnInit, OnDestroy } from '@angular/core';
import { TagsService } from 'src/app/compliance/services/tags.service';
import { BroadcasterService } from 'src/app/shared/services/broadcaster.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'cops-ec2-tags',
  templateUrl: './ec2-tags.component.html',
  styleUrls: ['./ec2-tags.component.scss']
})
export class EC2TagsComponent implements OnInit, OnDestroy {
  instance: any;
  manageTag: Boolean = false;
  // isLoading = true;

  tableOptions = {
    tableTitle: 'EC2Tags',
    isDisplaytitle: true,
    isRefresh: true,
    isDownload: true,
    isSelectable: true,
    isMultiSelect: true,
    isEditable: true,
    isDeletable: false
  };

  instanceData: any[];
  tagData: any[] = [];

  displayedColumns: any = {
    AccountId: {
      displayName: 'AccountId',
    },
    Region: {
      displayName: 'Region',
    },
    InstanceId: {
      displayName: 'InstanceId',
    },
    key: {
      displayName: 'Key',
    },
    status: {
      displayName: 'Status',
    }
  };
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private tagsService: TagsService,
    private broadCaster: BroadcasterService
  ) { }

  ngOnInit() {
    this.getInstanceData();
    this.broadCaster.onGroupChange().pipe(takeUntil(this.destroy$)).subscribe((payload) => {
      this.getInstanceData();
    });
    // this.getTagData();
    // this.getGroupsData();
  }

  getInstanceData() {
    // this.isLoading = true;
    this.tagsService.getInstancesWithTags().subscribe(
      res => {
        this.getTagData(res.data);
      },
      err => {
        console.log(err);
        // this.isLoading = false;
      }
    );
  }

  getTagData(instanceData) {
    // this.isLoading = true;
    this.tagsService.getTags('ec2').subscribe(
      res => {
        this.parseTagData(instanceData, res.data);
        // this.isLoading = false;
      },
      err => {
        console.log(err);
        // this.isLoading = false;
      }
    );
  }

  parseTagData(instanceData, tagData) {
    this.instanceData = [];
    this.tagData = tagData;
    tagData.map(tag => {
      instanceData.map(inst => {
        const currentInst = { ...inst, key: tag.name, type: tag.type, status: 'Blank', options: tag.options };
        if (tag.type === 'select') {
          if (currentInst.Tags) {
            const currentTag = inst.Tags.find(ele => ele.Key === tag.name);
            if (currentTag) {
              if (!tag.options.includes(currentTag.Value)) {
                currentInst.status = 'InValid';
                this.instanceData.push(currentInst);
              }
            } else {
              this.instanceData.push(currentInst);
            }
          } else {
            this.instanceData.push(currentInst);
          }
        } else {
          if (currentInst.Tags) {
            const currentTag = inst.Tags.find(ele => ele.Key === tag.name);
            if (!currentTag) {
              this.instanceData.push(currentInst);
            }
          } else {
            this.instanceData.push(currentInst);
          }
        }
      });
    });
  }

  onEditTag(instance) {
    this.manageTag = true;
    this.instance = instance;
  }

  onCancelTag(tag) {
    this.manageTag = false;
    this.instance = null;
    if (tag) {
      const index = this.instanceData.findIndex(value => (value.InstanceId === tag.InstanceId
        && value.key === tag.key));
      if (~index) {
        this.instanceData.splice(index, 1);
        this.instanceData = [...this.instanceData];
      }
    }
  }

  onRefreshTags(e) {
    this.getInstanceData();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
