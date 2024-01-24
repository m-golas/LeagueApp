import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { Profile } from '../_models/profile';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private currentUser: BehaviorSubject<Profile | null>;

  constructor(private http: HttpClient) {
    this.currentUser = new BehaviorSubject(null as Profile | null);
  }

  public get profile(): Profile | null {
    return this.currentUser.value;
  }

  asObservable(): Observable<Profile | null> {
    return this.currentUser.asObservable()
  }

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${environment.baseUrl}/profile`).pipe(
      tap((profile) => {
        console.log('profile', profile);
        this.currentUser.next(profile);
      })
    );
  }
}
