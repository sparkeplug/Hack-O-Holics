import { TestBed } from '@angular/core/testing';

import { PredictService } from './predict.service';

describe('PredictService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PredictService = TestBed.get(PredictService);
    expect(service).toBeTruthy();
  });
});
