import { TestBed } from '@angular/core/testing';

import { MandoService } from './mando.service';

describe('MandoService', () => {
  let service: MandoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MandoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
