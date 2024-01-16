import { Injectable } from '@angular/core';
import { Team } from '../_models/team';
import { of } from 'rxjs';
import { Challange } from '../_models/challange';
import { MOCK_CHALLANGFES } from '../_mock/challanges';
import { ChallangeRequest } from '../_models/challange-request';

@Injectable({
  providedIn: 'root',
})
export class ChallangeService {
  constructor() {}

  getChallanges() {
    return of(MOCK_CHALLANGFES);
  }

  challangeTeam(challange: ChallangeRequest) {
    console.log('Challanged team', challange)

    return of(false);
  }

  acceptChallange(id: Challange['id']) {
    return of(true);
  }

  declineChallange(id: Challange['id']) {
    return of(true);
  }
}
