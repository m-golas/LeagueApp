import { Component } from '@angular/core';
import { SportType } from 'src/app/core/_models/sport-type';
import { AuthService } from 'src/app/core/_services/auth.service';
import {
  SportContextService,
} from 'src/app/core/_services/sport-context.service';

@Component({
  selector: 'app-ladder-container',
  templateUrl: './ladder-container.component.html',
  styleUrls: ['./ladder-container.component.scss'],
})
export class LadderContainerComponent {
  constructor(private auth: AuthService, public sport: SportContextService) {}

  logout() {
    this.auth.logout();
  }

  select(select: SportType) {
    this.sport.setSportContext(select);
  }
}
