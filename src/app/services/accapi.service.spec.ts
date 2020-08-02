import { TestBed } from '@angular/core/testing';

import { AccapiService } from './accapi.service';

describe('AccapiService', () => {
  let service: AccapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
