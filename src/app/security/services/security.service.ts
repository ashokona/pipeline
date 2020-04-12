import { Injectable } from '@angular/core';
import { ApiService } from './../../shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  loader: any;

  constructor(
    private apiService: ApiService
  ) { }

  getSecurityTrend() {
    const path = 'security/securityTrend';
    return this.apiService.get(path);
  }

  getcloudReports() {
    const path = 'security/cloudReport';
    return this.apiService.get(path);
  }

  saveExclusions(data) {
    console.log(data)
    const path = ""
    // 'security/saveexclusions';
    return this.apiService.post(path, data);
  }

  getDashboardValues() {
    const path = 'security/dashboardS';
    return this.apiService.get(path);
  }

  getAccounts() {
    const path = 'configure/accounts';
    return this.apiService.get(path);
  }
  getTabValues() {
    const path = 'security/getTabValues';
    return this.apiService.get(path);
  }

}
