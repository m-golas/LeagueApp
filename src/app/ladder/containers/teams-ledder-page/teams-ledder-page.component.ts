import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable, first, map, mergeMap, of, tap } from 'rxjs';
import { Challange, ChallangeFull } from 'src/app/core/_models/challange';
import { Player } from 'src/app/core/_models/player';
import { Team } from 'src/app/core/_models/team';
import { ChallangeService } from 'src/app/core/_services/challange.service';
import { TeamsService } from 'src/app/core/_services/team.service';
import { ChallangeDialogComponent } from '../../dialogs/challange-dialog/challange-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InvitationDialogComponent } from '../../dialogs/invitation-dialog/invitation-dialog.component';
import { ChallaneDetailsDialogComponent } from '../../dialogs/challane-details-dialog/challane-details-dialog.component';
import { JoinTeamDialogComponent } from '../../dialogs/join-team-dialog/join-team-dialog.component';
import { ProfileService } from 'src/app/core/_services/profile.service';
import { TeamDialogComponent } from '../../dialogs/team-dialog/team-dialog.component';
import { TeamBase } from 'src/app/core/_models/team-base';
import { CreateTeamDialogComponent } from '../../dialogs/create-team-dialog/create-team-dialog.component';
import { SportContextService } from 'src/app/core/_services/sport-context.service';
import { ResolveChallangeDialogComponent } from '../../dialogs/resolve-challange-dialog/resolve-challange-dialog.component';

@Component({
  selector: 'app-teams-ledder',
  templateUrl: './teams-ledder-page.component.html',
  styleUrls: ['./teams-ledder-page.component.scss'],
})
export class TeamsLedderPageComponent {
  players$: BehaviorSubject<Array<Player>>;
  challanges$: BehaviorSubject<Array<Challange>>;

  playerTeam$: Observable<Team | null>;
  isOwner$: Observable<boolean>;
  hasTeam$: Observable<boolean>;

  selectedSection = 'teams';
  currentUser = this.profileService.profile;

  constructor(
    private profileService: ProfileService,
    private teamService: TeamsService,
    private challangeService: ChallangeService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private context: SportContextService
  ) {
    this.players$ = new BehaviorSubject<Array<Player>>([]);
    this.challanges$ = new BehaviorSubject<Array<Challange>>([]);
    this.playerTeam$ = this.teamService.getPlayerTeam();

    this.isOwner$ = this.teamService.isOwner();
    this.hasTeam$ = this.teamService
      .getPlayerTeam()
      .pipe(map((team) => !!team));
  }

  changeSelection(selection: string) {
    if (selection && this.selectedSection !== selection) {
      this.selectedSection = selection;
    }
  }

  openInvitation(id: number): void {
    this.teamService.getInvitationCode(id).subscribe((code) => {
      this.dialog.open(InvitationDialogComponent, {
        data: { code: code.code },
      });
    });
  }

  openJoinTeam(): void {
    const dialogRef = this.dialog.open(JoinTeamDialogComponent, {
      data: 'Join',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.teamService
        .joinTeam(result.code)
        .pipe(first())
        .subscribe((res) => {
          this.openResultSnack(
            !!res,
            'Pomyślnie dołączono do zespołu',
            'Nie udało się dołączyć do zespołu. Spróbuj ponownie później!'
          );

          this.profileService
            .getProfile()
            .pipe(first())
            .subscribe(() => this.context.reload());
        });
    });
  }

  openCreateTeam(): void {
    const dialogRef = this.dialog.open(CreateTeamDialogComponent, {
      data: 'Create',
    });

    dialogRef
      .afterClosed()
      .pipe(first())
      .subscribe((result) => {
        this.teamService
          .createTeam(result.name)
          .pipe(first())
          .subscribe((res) => {
            this.openResultSnack(
              !!res,
              'Pomyślnie utworzono zespół',
              'Nie udało się utowrzyć zespołu. Spróbuj ponownie później!'
            );

            this.profileService
              .getProfile()
              .pipe(first())
              .subscribe(() => this.context.reload());
          });
      });
  }

  acceptChalange(id: Challange['id']) {
    this.challangeService.acceptChallange(id).subscribe((res) => {
      this.openResultSnack(
        !!res,
        'Pomyślnie akceptowano wyzwanie',
        'Nie udało się akceptować wyzwania. Spróbuj ponownie później!'
      );
      this.context.reload();
    });
  }

  declineChalange(id: Challange['id']) {
    this.challangeService.declineChallange(id).subscribe((res) => {
      this.openResultSnack(
        !!res,
        'Pomyślnie odrzucono wyzwanie',
        'Nie udało się odrzucić wyzwania. Spróbuj ponownie później!'
      );
      this.context.reload();
    });
  }

  challangeTeam(team: Team): void {
    const dialogRef = this.dialog.open(ChallangeDialogComponent, {
      data: { team },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Challange Result', result);

      if (result) {
        this.challangeService
          .challangeTeam(result)
          .pipe(first())
          .subscribe((result) => {
            this.openResultSnack(
              !!result,
              'Pomyślnie wyzwano zespół',
              'Nie udało się wyzwać zespołu. Spróbuj ponownie później!'
            );
          });
      }
    });
  }

  showTeamDialog(team: TeamBase) {
    this.teamService
      .getTeam(team.id)
      .pipe(first())
      .subscribe((team) => {
        this.dialog.open(TeamDialogComponent, {
          data: { ...team },
        });
      });
  }

  showChallangeDialog(challange: Challange): void {
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

  resolveChallange(challange: ChallangeFull) {
    const dialogRef = this.dialog.open(ResolveChallangeDialogComponent, {
      data: { ...challange },
    });

    dialogRef.afterClosed().subscribe((result) => {
      const {
        id,
        challengerID,
        challengedID,
        result: { yourScore, enemyScore },
      } = result;

      this.teamService
        .getPlayerTeam()
        .pipe(
          first(),
          mergeMap((team) => {
            if (team) {
              const challengerScore =
                team.id === challengerID ? yourScore : enemyScore;
              const challengedScore =
                team.id === challengedID ? yourScore : enemyScore;

              return this.challangeService
                .resolveChallange(id, challengerScore, challengedScore)
                .pipe(
                  first(),
                );
            }

            return of(false);
          })
        )
        .subscribe((res) => {
          this.openResultSnack(
            !!res,
            'Pomyślnie wprowadzono wynik',
            'Nie udało się wprowadzić wyniku. Spróbuj ponownie później!'
          );
          this.context.reload();
        });
    });
  }
}
