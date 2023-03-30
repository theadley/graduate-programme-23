import { TestBed } from '@angular/core/testing';

import { FanGuard } from './fan.guard';

describe('FanGuard', () => {
  let guard: FanGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FanGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
