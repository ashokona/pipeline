import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  loader: Subject<boolean> = new Subject<boolean>();
  
  constructor(
    private apiService: ApiService
  ) { }

  getTags(resourceType = 'all') {
    const path = resourceType? `compliance/tags?resourceType=${resourceType}` :'compliance/tags';
    return this.apiService.get(path);
  }

  addTag(data) {
    const path = 'compliance/tags';
    return this.apiService.post(path, data);
  }

  updateTag(data) {
    const path = 'compliance/updateTags';
    return this.apiService.post(path, data);
  }

  updateEC2Tag(data) {
    const path = 'compliance/updateEC2Tag';
    return this.apiService.post(path, data);
  }

  removeTags(data) {
    const path = 'compliance/deleteTags';
    return this.apiService.post(path, data);
  }

  getInstancesWithTags () {
    const path = 'compliance/fetchInstancesWithTags';
    return this.apiService.get(path);
  }

  getGroups() {
    const path = 'configure/groups';
    return this.apiService.get(path);
  }

  addRecommendedTags(data) {
    const path = 'compliance/addRecommendedTags';
    return this.apiService.post(path, data);
  }

}
