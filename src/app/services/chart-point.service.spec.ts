import { TestBed } from '@angular/core/testing';

import { ChartPointService } from './chart-point.service';

describe('ChartPointService', () => {
  let service: ChartPointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartPointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
