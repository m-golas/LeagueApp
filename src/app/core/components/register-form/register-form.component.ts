import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterRequest } from '../../_models/register-request';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  @Input() error: string = '';
  @Output() submitted: EventEmitter<RegisterRequest> = new EventEmitter<RegisterRequest>();

  constructor() { }

  ngOnInit(): void {
  }

  registerForm: FormGroup = new FormGroup({
    mail: new FormControl('',Validators.required),
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    repeatPassword: new FormControl('',Validators.required),
  });

  submit() {
    if (this.registerForm.valid) {
      if(this.registerForm.controls['password'].value === this.registerForm.controls['repeatPassword'].value){
        const { repeatPassword, ...request } = this.registerForm.value;
        this.submitted.emit( request );
      } else {
        this.error = "Hasła się różnią";
      }
    }
  }

}
