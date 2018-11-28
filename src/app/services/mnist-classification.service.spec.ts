import { TestBed } from '@angular/core/testing';

import { MnistClassificationService } from './mnist-classification.service';

describe('MnistClassificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MnistClassificationService = TestBed.get(MnistClassificationService);
    expect(service).toBeTruthy();
  });
});
