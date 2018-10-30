import { TestBed } from '@angular/core/testing';

import { LespartiesService } from './lesparties.service';

describe('LespartiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LespartiesService = TestBed.get(LespartiesService);
    expect(service).toBeTruthy();
  });
});
