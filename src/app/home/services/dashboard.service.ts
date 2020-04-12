import { Injectable } from '@angular/core';
import { ApiService } from './../../shared/services/api.service';

@Injectable()
export class DashboardService {

  constructor(
    private apiService: ApiService
  ) { }

  getSavings() {
    const path = 'cost/savings';
    return this.apiService.get(path);
  }

  getSpendsReport() {
    const path = 'cost/spendReport';
    return this.apiService.get(path);
  }

  getSecurityReports() {
    const path = 'security/report';
    return this.apiService.get(path);
  }

  getTagReport() {
    const path = 'compliance/getTagReport';
    return this.apiService.get(path);
  }

  getRiskCount() {
    const path = 'security/getRiskCount';
    return this.apiService.get(path);
  }

  getResources() {
    const path = 'security/homeDashS';
    return this.apiService.get(path);
  }

  getInventorySummary() {
    const path = 'inventory/summary';
    return this.apiService.get(path);
  }

  getMonthlyInventorySummary() {
    const path = 'inventory/monthlysummary';
    return this.apiService.get(path);
  }

}
