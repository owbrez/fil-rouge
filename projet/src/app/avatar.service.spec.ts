import { TestBed } from '@angular/core/testing';

import { AvatarService } from './services/avatar.service';

describe('AvatarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvatarService = TestBed.get(AvatarService);
    expect(service).toBeTruthy();
  });
});
