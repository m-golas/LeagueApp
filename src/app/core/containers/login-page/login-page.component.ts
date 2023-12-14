import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Credentials } from '../../_models/credentials';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  errorFlag: boolean = false;

  constructor(
    private auth: AuthService,
    private router: Router
    ) { }

  submit(credentials: Credentials) {
    this.auth.login(credentials).pipe(first()).subscribe(
      (data) => {this.router.navigate(['/ladder'])},
      (err) => {this.errorFlag = true}
    );
  }
}
