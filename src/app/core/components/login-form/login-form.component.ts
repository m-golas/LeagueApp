import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Credentials } from '../../_models/credentials';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {

  @Input() error: boolean = false;
  @Output() submitted: EventEmitter<Credentials> = new EventEmitter<Credentials>();
  
  constructor() { }

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });

  submit() {
    if (this.loginForm.valid) {
      this.submitted.emit( this.loginForm.value );
    }
  }
}
