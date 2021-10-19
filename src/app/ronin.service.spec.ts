import { TestBed } from '@angular/core/testing';

import { RoninService } from './ronin.service';

describe('RoninService', () => {
  let service: RoninService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoninService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
