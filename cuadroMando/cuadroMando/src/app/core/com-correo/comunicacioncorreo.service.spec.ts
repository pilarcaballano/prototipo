import { TestBed } from '@angular/core/testing';

import { ComunicacioncorreoService } from './comunicacioncorreo.service';

describe('ComunicacioncorreoService', () => {
  let service: ComunicacioncorreoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicacioncorreoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
