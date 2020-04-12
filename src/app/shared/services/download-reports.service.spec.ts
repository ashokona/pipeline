import { TestBed } from '@angular/core/testing';

import { DownloadReportsService } from './download-reports.service';

describe('DownloadReportsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DownloadReportsService = TestBed.get(DownloadReportsService);
    expect(service).toBeTruthy();
  });
});
