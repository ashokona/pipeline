import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { CostService } from './cost.service';
import { ApiService } from './../../shared/services/api.service';

describe('CostService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ ApiService, CostService, HttpClient ],
    imports: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: CostService = TestBed.get(CostService);
    expect(service).toBeTruthy();
  });
});
