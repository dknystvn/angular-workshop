import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _loggedIn = false;

  public get loggedId(): boolean {
    return this._loggedIn;
  }

  public logIn(): void {
    this._loggedIn = true;
  }
}

