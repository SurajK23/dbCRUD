import { TestBed } from '@angular/core/testing';

import { EmpManagerService } from './emp-manager.service';

describe('EmpManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpManagerService = TestBed.get(EmpManagerService);
    expect(service).toBeTruthy();
  });
});
