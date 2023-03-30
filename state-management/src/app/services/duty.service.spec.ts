import { TestBed } from '@angular/core/testing';

import { DutyService } from './duty.service';

describe('DutyService', () => {
  let service: DutyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DutyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
