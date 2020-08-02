import { TestBed } from '@angular/core/testing';

import { DairyapiService } from './dairyapi.service';

describe('DairyapiService', () => {
  let service: DairyapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DairyapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
