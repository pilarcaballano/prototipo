import { TestBed } from '@angular/core/testing';

import { UrlMappingService } from './url-mapping.service';

describe('UrlMappingService', () => {
  let service: UrlMappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlMappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
