import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(
    private apiService: ApiService
  ) { }

  getDatabase(params) {
    const path = 'inventory/database';
    return this.apiService.get(path, params);
  }
}
