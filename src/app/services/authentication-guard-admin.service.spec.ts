import { TestBed } from '@angular/core/testing';

import { AuthenticationGuardAdminService } from './authentication-guard-admin.service';

describe('AuthenticationGuardAdminService', () => {
  let service: AuthenticationGuardAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationGuardAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
