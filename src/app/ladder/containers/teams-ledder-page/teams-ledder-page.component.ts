import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Challange } from 'src/app/core/_models/challange';
import { Player } from 'src/app/core/_models/player';
import { Team } from 'src/app/core/_models/team';
import { TeamWithMembers } from 'src/app/core/_models/team-with-members';
import { AuthService } from 'src/app/core/_services/auth.service';
import { ChallangeService } from 'src/app/core/_services/challange.service';
import { PlayerTeamService } from 'src/app/core/_services/player-team.service';
import { PlayerService } from 'src/app/core/_services/player.service';
import { TeamsService } from 'src/app/core/_services/team.service';

@Component({
  selector: 'app-teams-ledder',
  templateUrl: './teams-ledder-page.component.html',
  styleUrls: ['./teams-ledder-page.component.scss'],
})
export class TeamsLedderPageComponent {
  teams$: BehaviorSubject<Array<Team>>;
  players$: BehaviorSubject<Array<Player>>;
  challanges$: BehaviorSubject<Array<Challange>>;
  playerTeam$: BehaviorSubject<TeamWithMembers | null>;

  selectedSection = "teams"
  currentUser = this.auth.currentUser

  constructor(
    private teamService: TeamsService,
    private challangeService: ChallangeService,
    private playerService: PlayerService,
    private playerTeamService: PlayerTeamService,
    private auth: AuthService
  ) {
    this.teams$ = new BehaviorSubject<Array<Team>>([]);
    this.players$ = new BehaviorSubject<Array<Player>>([]);
    this.challanges$ = new BehaviorSubject<Array<Challange>>([]);
    this.playerTeam$ = new BehaviorSubject(null as TeamWithMembers | null);
  }

  ngOnInit() {
    this.getAllTeams();
    this.getAllPlayers();
    this.getPlayerTeam();
    this.getAllChallanges();
  }

  changeSelection(selection: string) {
    if(selection && this.selectedSection !== selection) {
      this.selectedSection = selection
    }
  }

  getAllChallanges(): void {
    this.challangeService.getChallanges().subscribe((challanges) => {
      console.log(challanges)
      this.challanges$.next(challanges)
    })
  }

  getAllTeams(): void {
    this.teamService.getAllTeams().subscribe((teams) => {
      this.teams$.next(teams);
    });
  }

  getAllPlayers(): void {
    this.playerService.getAllPlayers().subscribe((players) => {
      this.players$.next(players);
    });
  }

  getPlayerTeam(): void {
    this.playerTeamService.getTeam().subscribe((team) => {
      this.playerTeam$.next(team)
    })
  }

  challangeTeam(team: Team): void {
    this.challangeService.challangeTeam(team).subscribe((_) => {
      console.log('Challange', team);
    });
  }
}
