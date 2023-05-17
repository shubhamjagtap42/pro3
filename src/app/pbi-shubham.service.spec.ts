import { TestBed } from '@angular/core/testing';

import { PbiShubhamService } from './pbi-shubham.service';

describe('PbiShubhamService', () => {
  let service: PbiShubhamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PbiShubhamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
