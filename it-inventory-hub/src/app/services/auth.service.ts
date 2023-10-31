import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _loggedIn = false;

  public get loggenId(): boolean {
    return this._loggedIn;
  }

  public logIn() {
    this._loggedIn = true;
  }
}
