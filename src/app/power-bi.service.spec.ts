import { TestBed } from '@angular/core/testing';

import { PowerBiService } from './power-bi.service';

describe('PowerBiService', () => {
  let service: PowerBiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PowerBiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
