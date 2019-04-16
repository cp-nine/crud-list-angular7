import { TestBed } from '@angular/core/testing';

import { SampleduaService } from './sampledua.service';

describe('SampleduaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleduaService = TestBed.get(SampleduaService);
    expect(service).toBeTruthy();
  });
});
