import { TestBed } from '@angular/core/testing';

import { WgerService } from './wger.service';

describe('WgerService', () => {
  let service: WgerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WgerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
