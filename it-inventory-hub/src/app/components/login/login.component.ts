import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public constructor(
    private readonly router: Router,
    private readonly auth: AuthService,
  ) {}

  public logIn(): void {
    this.auth.logIn();
    this.router.navigate(['browse']);
  }
}

