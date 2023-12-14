import { TestBed } from '@angular/core/testing';

import { PlayerTeamService } from './player-team.service';

describe('PlayerTeamService', () => {
  let service: PlayerTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
