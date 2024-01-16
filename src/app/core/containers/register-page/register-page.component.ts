import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterRequest } from '../../_models/register-request';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  error: string = '';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  submit(data: RegisterRequest) {
    this.error = '';
    this.auth.register(data).subscribe(
      (data) => {this.router.navigate(['/login'])},
      (err) => {this.error = 'Błąd rejestracji! Wprowadź inne dane!'}
    );
  }
}
