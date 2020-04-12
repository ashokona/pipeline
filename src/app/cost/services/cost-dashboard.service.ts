import { Injectable } from '@angular/core';
import { ApiService } from './../../shared/services/api.service';
import { Subject } from 'rxjs';
import { Savings } from '../models/cost.interface';
import { DashboardService } from '../../home/services/dashboard.service';


@Injectable()
export class CostDashboardService {

  loader: Subject<boolean> = new Subject<boolean>();
  savings: Subject<Savings> = new Subject<Savings>();

  constructor(
    private apiService: ApiService,
    private readonly dashboardService: DashboardService
  ) { }

  setSavings() {
    this.dashboardService.getSavings().subscribe(res => {
      localStorage.setItem('savings', JSON.stringify(res.data));
      this.savings.next(res.data);
    });
  }

  getSavings() {
    const path = 'cost/savings';
    return this.apiService.post(path);
  }
  getSpendsByRegion() {
    const path = 'cost/spendsByRegion';
    return this.apiService.get(path);
  }

  getSpendsByResource() {
    const path = 'cost/spendsByResource';
    return this.apiService.get(path);
  }

  updateSavings(updateType, amount) {
    let savings = JSON.parse(localStorage.getItem('savings'));
    savings[updateType] = savings[updateType] - amount;
    localStorage.setItem('savings', JSON.stringify(savings));
    this.savings.next(savings);
  }

  deleteSchedule(data) {
    const path = 'cost/deleteSchedule';
    return this.apiService.post(path, data);
  }

  getSpendTrend() {
    const path = 'cost/spendsTrend';
    return this.apiService.get(path).toPromise();
  }

  getScheduleGraph() {
    const path = 'cost/fetchScheduleGraph';
    return this.apiService.get(path).toPromise();
  }
}
