import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComputeService {

  constructor(
    private apiService: ApiService
  ) { }

  getCompute(params): Observable<any> {
    const path = 'inventory/compute';
    return this.apiService.get(path, params);
  }

}
