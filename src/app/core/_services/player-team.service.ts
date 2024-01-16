import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, mergeMap, of, tap } from 'rxjs';
import { TeamsService } from './team.service';
import { AuthService } from './auth.service';
import { TeamWithMembers } from '../_models/team-with-members';
@Injectable({
  providedIn: 'root',
})
export class PlayerTeamService {
  private currentTeamSubject: BehaviorSubject<
    TeamWithMembers | undefined | null
  >;

  constructor(private teamService: TeamsService, private auth: AuthService) {
    this.currentTeamSubject = new BehaviorSubject<
      TeamWithMembers | undefined | null
    >(undefined);
  }

  public get isOwner() {
    const user = this.auth.currentUser;
    const currentTeam = this.currentTeamSubject.value;
    return user && currentTeam ? user.id === currentTeam.ownerID : false;
  }

  getTeam(): Observable<TeamWithMembers | null> {
    return this.isLoaded().pipe(
      mergeMap((loaded) =>
        false
          ? of(this.currentTeamSubject.value as TeamWithMembers | null)
          : this.loadTeam()
      )
    );
  }

  isLoaded() {
    return this.currentTeamSubject.pipe(map((team) => team !== undefined));
  }

  loadTeam(): Observable<TeamWithMembers | null> {
    const user = this.auth.currentUser;

    //return of(null)

    return of(user).pipe(
      mergeMap((user) => {
        const team = user?.team;
        if (user && team) {
          return this.teamService.getTeamMembers(team).pipe(
            map((members) => {
              return {
                ...team,
                members,
                isOwner: team.ownerID === this.auth.currentUser?.id,
                //isOwner: false
              };
            })
          );
        }

        return of(null);
      })
    );
  }
}
