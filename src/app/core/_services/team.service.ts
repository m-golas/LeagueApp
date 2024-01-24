import { Injectable } from '@angular/core';
import {
  Observable,
  exhaustMap,
  filter,
  first,
  map,
  mergeMap,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { Team } from '../_models/team';
import { ProfileService } from './profile.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SportContextService } from './sport-context.service';
import { TeamBase } from '../_models/team-base';
import { Paginable } from '../_models/paginable';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(
    private profile: ProfileService,
    private http: HttpClient,
    private context: SportContextService
  ) {}

  getTeam(id: number): Observable<Team> {
    return this.http.get<Team>(`${environment.baseUrl}/team/${id}`, {});
  }

  getTeams({
    page,
    size,
    name,
  }: {
    page: number;
    size: number;
    name?: string;
  }): Observable<Paginable<Team>> {
    return this.context.getSportContextObservable().pipe(
      exhaustMap((type) =>
        this.http
          .get<Paginable<Team>>(`${environment.baseUrl}/team`, {
            params: {
              page,
              size,
              type,
              ...(name ? { name } : {}),
            },
          })
          .pipe(first())
      )
    );
  }

  isOwner(): Observable<boolean> {
    return this.context.getSportContextObservable().pipe(
      switchMap((type) => {
        return this.profile.asObservable().pipe(
          mergeMap((profile) => profile?.teams || []),
          filter((team) => team.type === type),
          map((team) => team?.owner === 'OWNER'),
          tap((team) => console.log('Team', team)),
          first()
        );
      })
    );
  }

  getPlayerTeam(): Observable<Team | null> {
    return this.context.getSportContextObservable().pipe(
      switchMap((type) => {
        return this.profile.asObservable().pipe(
          mergeMap((profile) => profile?.teams || []),
          map((team) => (team.type === type ? team.id : null)),
          exhaustMap((id) => {
            return (id && this.getTeam(id)) || of(null);
          })
        );
      })
    );
  }

  getInvitationCode(id: number): Observable<{ code: string }> {
    return this.http.get<{ code: string }>(
      `${environment.baseUrl}/team/${id}/code`
    );
  }

  createTeam(name: string): Observable<TeamBase> {
    return this.context.getSportContextObservable().pipe(
      switchMap((type) => {
        return this.http.post<Team>(`${environment.baseUrl}/team`, {
          name: name,
          type: type,
        });
      })
    );
  }

  joinTeam(code: string): Observable<TeamBase> {
    return this.http.post<TeamBase>(`${environment.baseUrl}/team/join`, {
      code,
    });
  }

  leaveTeam(id: number): Observable<Team> {
    return this.http.delete<Team>(`${environment.baseUrl}/team/${id}/leave`);
  }
}
