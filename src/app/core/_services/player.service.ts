import { Injectable } from '@angular/core';
import { Player } from '../_models/player';
import { Observable, of } from 'rxjs';
import { MOCK_PLAYERS } from '../_mock/player';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor() {}

  getAllPlayers(): Observable<Array<Player>> {
    return of(MOCK_PLAYERS);
  }
  
}
