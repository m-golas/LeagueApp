import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { User } from '../_models/user';
import { Credentials } from '../_models/credentials';
import { RegisterRequest } from '../_models/register-request';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject(this.getUserFromLocal());
  }

  public get currentUser(): User | null {
    return this.currentUserSubject.value;
  }

  public get isLogged(): boolean {
    return !!this.currentUser && !!this.currentUser.token;
  }

  login(credentials: Credentials): Observable<User> {
    // return this.http.post<User>(`${environment.baseUrl}/auth/login`, credentials)

    return of({
      id: 'TEST_PLAYER_1',
      name: 'TEST ACCOUNT 1',
      team:     {
        id: 'TEST_TEAM1',
        name: 'Team 1',
        points: 1345,
        ownerID: 'TEST_PLAYER_1',
        position: 1
      },
      token: 'TOKEN',
    }).pipe(
      map((user) => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      })
    );
  }

  register(data: RegisterRequest): Observable<User> {
    //return this.http.post<User>(`${environment.baseUrl}/auth/register`, data)
    return of({
      id: 'Team1',
      name: 'TEST ACCOUNT',
      team: undefined,
      token: 'TOKEN',
    });
  }

  logout() {
    this.currentUserSubject.next(null);
  }

  getUserFromLocal(): User | null {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  // hasRoles(permissions: string[]): boolean {
  //   if(this.currentUser){
  //     return permissions.some(perm => this.currentUser!.roles.includes(perm))
  //   }

  //   return false;
  // }
}
