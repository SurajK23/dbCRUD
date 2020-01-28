import { TestBed } from '@angular/core/testing';

import { EmpArrayDataService } from './emp-array-data.service';

describe('EmpArrayDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpArrayDataService = TestBed.get(EmpArrayDataService);
    expect(service).toBeTruthy();
  });
});
