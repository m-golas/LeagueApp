import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(protected readonly keycloak: KeycloakService) {}

  logout = async () => {
    await this.keycloak.logout();
  };
}
