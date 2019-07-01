import { TestBed } from '@angular/core/testing';

import { LocalMemoryDataService } from './local-memory-data.service';

describe('LocalMemoryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalMemoryDataService = TestBed.get(LocalMemoryDataService);
    expect(service).toBeTruthy();
  });
});
