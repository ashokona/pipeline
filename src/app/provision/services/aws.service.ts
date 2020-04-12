import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AwsService {

  constructor(
    private apiService: ApiService
  ) { }

  getCompute(params) {
    const path = 'inventory/compute';
    return this.apiService.get(path, params);
  }
}
