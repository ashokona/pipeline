import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  getInventoryData(params) {
    const path = 'inventory/data';
    return this.apiService.get(path, params);
  }

  constructor(
    private apiService: ApiService
  ) { }
}
