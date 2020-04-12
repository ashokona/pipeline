import { TestBed } from '@angular/core/testing';

import { TagsService } from './tags.service';

describe('ComputeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TagsService = TestBed.get(TagsService);
    expect(service).toBeTruthy();
  });
});
