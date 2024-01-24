import { Injectable } from '@angular/core';
import { Player } from '../_models/player';
import { Observable, last } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Paginable } from '../_models/paginable';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private http: HttpClient) {}

  getPlayers({
    page,
    size,
    name,
  }: {
    page: number;
    size: number;
    name?: string;
  }): Observable<Paginable<Player>> {
    return this.http
      .get<Paginable<Player>>(`${environment.baseUrl}/users`,{
        params: {
          page,
          size,
          ...(name ? { payload: name } : {}),
        },
      })
      .pipe(last());
  }

  getPlayer(id: number): Observable<Player> {
    return this.http.get<Player>(`${environment.baseUrl}/users/${id}`);
  }
}
