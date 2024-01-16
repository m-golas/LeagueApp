import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/_services/auth.service';

@Component({
  selector: 'app-ladder-container',
  templateUrl: './ladder-container.component.html',
  styleUrls: ['./ladder-container.component.scss']
})
export class LadderContainerComponent {
  constructor(private auth: AuthService, private router: Router){}

  logout(){
    this.auth.logout();
  }
}
