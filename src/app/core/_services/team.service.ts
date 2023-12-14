import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Team } from '../_models/team';
import { Player } from '../_models/player';
import { MOCK_TEAMS, MOCK_TEAM_MEMBERS } from '../_mock/team';


@Injectable({
  providedIn: 'root',
})
export class TeamsService {

  constructor() {
  }

  getAllTeams(): Observable<Array<Team>> {
    return of(MOCK_TEAMS);
  }

  getTeamMembers(team: Team): Observable<Array<Player>> {
    return of(MOCK_TEAM_MEMBERS);
  }
}
