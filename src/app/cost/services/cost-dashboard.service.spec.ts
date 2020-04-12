import { TestBed } from '@angular/core/testing';

import { CostDashboardService } from './cost-dashboard.service';

describe('CostDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CostDashboardService = TestBed.get(CostDashboardService);
    expect(service).toBeTruthy();
  });
});
