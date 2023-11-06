import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    service = TestBed.inject(AuthService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should return false after initialization', () => {
    expect(service.loggedId).toBeFalse();
  });

  it('should return true after logging in', () => {
    service.logIn();
    expect(service.loggedId).toBeTrue();
  });
});
