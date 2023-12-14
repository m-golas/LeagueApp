import { Injectable } from '@angular/core';
import { Team } from '../_models/team';
import { of } from 'rxjs';
import { Challange } from '../_models/challange';
import { MOCK_CHALLANGFES } from '../_mock/challanges';

@Injectable({
  providedIn: 'root',
})
export class ChallangeService {
  constructor() {}

  getChallanges() {
    return of(MOCK_CHALLANGFES);
  }

  challangeTeam(team: Team) {
    return of(true);
  }

  acceptChallange(id: Challange['id']) {
    return of(true);
  }

  declineChallange(id: Challange['id']) {
    return of(true);
  }
}
