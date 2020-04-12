import { Injectable } from '@angular/core';
import { ApiService } from './../../shared/services/api.service';
import { Subject } from 'rxjs';

@Injectable()
export class CostService {

  loader: Subject<boolean> = new Subject<boolean>();

  constructor(
    private apiService: ApiService
  ) { }

  getUnusedResources(type, data) {
    const path = type;
    return this.apiService.post(path, data);
  }

  getSchedules() {
    const path = 'cost/fetchSchedule';
    return this.apiService.get(path);
  }

  addSchedule(data) {
    const path = 'cost/schedule';
    return this.apiService.post(path, data);
  }

  updateSchedule(data) {
    const path = 'cost/updateSchedule';
    // console.log(data);
    return this.apiService.post(path, data);
  }

  addInstancesToSchedule(data) {
    const path = 'cost/addToSchedule';
    return this.apiService.post(path, data);
  }

  deleteInstanceFromSchedule(data) {
    const path = 'cost/deleteScheduleInstance';
    return this.apiService.post(path, data);
  }

  getInstances() {
    const path = 'cost/fetchInstance';
    return this.apiService.get(path);
  }

  getVolumes() {
    const path = 'cost/volumes';
    return this.apiService.get(path);
  }

  deleteUnusedVolumes(data) {
    const path = 'cost/deleteVolumes';
    return this.apiService.post(path, data);
  }

  getRiRecommendations() {
    const path = 'cost/rirecommendations';
    return this.apiService.get(path);
  }
}
