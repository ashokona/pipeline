import { Injectable } from '@angular/core';
import { ApiService } from './../../shared/services/api.service';

@Injectable()
export class ComplianceDashboardService {

  constructor(
    private apiService: ApiService
  ) { }

  getTagReport() {
    const path = 'compliance/getTagReport';
    return this.apiService.get(path);
  }

  createBackupPlan(data) {
    const path = 'backup/createBackupPlan';
    return this.apiService.post(path, data);
  }

  getBackedUpResources() {
    const path = 'backup/listBackedupResources';
    return this.apiService.get(path);
  }

  getNonBackedUpResources() {
    const path = 'backup/listNonBackedupResources';
    return this.apiService.get(path);
  }

  getAccounts() {
    const path = 'configure/accounts';
    return this.apiService.get(path);
  }

  createBackupIamRole(params) {
    const path = 'backup/createBackupIamRole';
    return this.apiService.get(path, params);
  }
}
