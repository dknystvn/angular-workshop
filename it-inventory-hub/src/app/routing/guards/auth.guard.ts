import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  public constructor(
    private readonly auth: AuthService,
    private readonly router: Router,
  ) {}

  public canActivate(): Observable<boolean | UrlTree>{
    if (!this.auth.loggedId) {
      return of(this.router.createUrlTree(['login']));
    }
    return of(true);
  }
}
