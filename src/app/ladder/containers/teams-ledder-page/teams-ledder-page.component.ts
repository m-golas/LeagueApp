import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, filter, map } from 'rxjs';
import { Challange } from 'src/app/core/_models/challange';
import { Player } from 'src/app/core/_models/player';
import { Team } from 'src/app/core/_models/team';
import { TeamWithMembers } from 'src/app/core/_models/team-with-members';
import { AuthService } from 'src/app/core/_services/auth.service';
import { ChallangeService } from 'src/app/core/_services/challange.service';
import { PlayerTeamService } from 'src/app/core/_services/player-team.service';
import { PlayerService } from 'src/app/core/_services/player.service';
import { TeamsService } from 'src/app/core/_services/team.service';
import { ChallangeDialogComponent } from '../../dialogs/challange-dialog/challange-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InvitationDialogComponent } from '../../dialogs/invitation-dialog/invitation-dialog.component';
import { ChallaneDetailsDialogComponent } from '../../dialogs/challane-details-dialog/challane-details-dialog.component';

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

  selectedSection = 'teams';
  currentUser = this.auth.currentUser;

  constructor(
    private teamService: TeamsService,
    private challangeService: ChallangeService,
    private playerService: PlayerService,
    private playerTeamService: PlayerTeamService,
    private auth: AuthService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
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
    if (selection && this.selectedSection !== selection) {
      this.selectedSection = selection;
    }
  }

  getAllChallanges(): void {
    this.challangeService
      .getChallanges()
      .pipe(
        map((challanges) =>
          challanges.sort(
            (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
          )
        )
      )
      .subscribe((challanges) => {
        console.log(challanges);

        this.challanges$.next(challanges);
      });
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
      this.playerTeam$.next(team);
    });
  }

  openInvitation(code: string): void {
    this.dialog.open(InvitationDialogComponent, {
      data: { code },
    });
  }

  acceptChalange(id: Challange['id']) {
    this.challangeService
      .acceptChallange(id)
      .subscribe((res) => {
        this.openResultSnack(
          res,
          'Pomyślnie akceptowano wyzwanie',
          'Nie udało się akceptować wyzwania. Spróbuj ponownie później!'
        )
        this.getAllChallanges()
      }
      );
  }

  declineChalange(id: Challange['id']) {
    this.challangeService
      .declineChallange(id)
      .subscribe((res) => {
        this.openResultSnack(
          res,
          'Pomyślnie odrzucono wyzwanie',
          'Nie udało się odrzucić wyzwania. Spróbuj ponownie później!'
        )

        this.getAllChallanges()
      }
      );
  }

  challangeTeam(team: Team): void {
    const dialogRef = this.dialog.open(ChallangeDialogComponent, {
      data: { team },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.challangeService.challangeTeam(result).subscribe((result) => {
          this.openResultSnack(
            result,
            'Pomyślnie wyzwano zespół',
            'Nie udało się wyzwać zespołu. Spróbuj ponownie później!'
          );
        });
      }
    });
  }

  showChallangeDialog(challange: Challange): void {
    console.log(challange)

    this.dialog.open(ChallaneDetailsDialogComponent, {
      data: { ...challange },
    });
  }

  openResultSnack(
    result: boolean,
    successMsg: string,
    errorMsg: string,
    buttonMsg = 'Ok'
  ) {
    this.snackBar.open(result ? successMsg : errorMsg, buttonMsg, {
      duration: 5000,
    });
  }

  resolveChallange(challange: Challange) {
    console.log('Challange', challange)
  }
}
