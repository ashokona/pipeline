import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  constructor(
    private apiService: ApiService
  ) { }

  getInventoryData(params) {
    const path = 'inventory/data';
    return this.apiService.get(path, params);
  }

  getResourcesCount() {
    const path = 'inventory/resourcescount';
    return this.apiService.get(path);
  }
}
