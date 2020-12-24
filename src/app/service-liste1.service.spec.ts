import { TestBed } from '@angular/core/testing';

import { ServiceListe1Service } from './service-liste1.service';

describe('ServiceListe1Service', () => {
  let service: ServiceListe1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceListe1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
