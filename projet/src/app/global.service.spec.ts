import { TestBed } from '@angular/core/testing';

import { GlobalService } from './services/global.service';

describe('GlobalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalService = TestBed.get(GlobalService);
    expect(service).toBeTruthy();
  });
});
