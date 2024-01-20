import { TestBed } from '@angular/core/testing';

import { SportContextService } from './sport-context.service';

describe('SportContextService', () => {
  let service: SportContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
