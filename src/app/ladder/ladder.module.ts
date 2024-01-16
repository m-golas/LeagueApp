import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { TeamsLedderPageComponent } from './containers/teams-ledder-page/teams-ledder-page.component';
import { TeamsListComponent } from './components/teams-list/teams-list.component';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { LaddersToggleComponent } from './components/ladders-toggle/ladders-toggle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamMembersListComponent } from './components/team-members-list/team-members-list.component';
import { LadderRoutingModule } from './ladder-routing.module';
import { IncomingMatchesComponent } from './components/incoming-matches/incoming-matches.component';
import { ChallangesListComponent } from './components/challanges-list/challanges-list.component';
import { LadderContainerComponent } from './containers/ladder-container/ladder-container.component';
import { ChallangeCardComponent } from './components/challange-card/challange-card.component';
import { ChallangeDialogComponent } from './dialogs/challange-dialog/challange-dialog.component';
import { InvitationDialogComponent } from './dialogs/invitation-dialog/invitation-dialog.component';
import { ChallangeTypePipe } from './pipes/challange-type.pipe';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatchesAwaitingScoringComponent } from './components/matches-awaiting-scoring/matches-awaiting-scoring.component';
import { ChallaneDetailsDialogComponent } from './dialogs/challane-details-dialog/challane-details-dialog.component';
import { IncomingMatchesListComponent } from './components/incoming-matches-list/incoming-matches-list.component';
import { PendingChallangesListComponent } from './components/pending-challanges-list/pending-challanges-list.component';
import { AwaitingScoringChallangesListComponent } from './components/awaiting-scoring-challanges-list/awaiting-scoring-challanges-list.component';
import { MatchesHistoryListComponent } from './components/matches-history-list/matches-history-list.component';
import { JoinTeamDialogComponent } from './dialogs/join-team-dialog/join-team-dialog.component';


@NgModule({
  declarations: [
    TeamsLedderPageComponent,
    TeamsListComponent,
    PlayersListComponent,
    LaddersToggleComponent,
    TeamMembersListComponent,
    IncomingMatchesComponent,
    ChallangesListComponent,
    LadderContainerComponent,
    ChallangeCardComponent,
    ChallangeDialogComponent,
    InvitationDialogComponent,
    ChallangeTypePipe,
    MatchesAwaitingScoringComponent,
    ChallaneDetailsDialogComponent,
    IncomingMatchesListComponent,
    PendingChallangesListComponent,
    AwaitingScoringChallangesListComponent,
    MatchesHistoryListComponent,
    JoinTeamDialogComponent
  ],
  exports: [
    TeamsLedderPageComponent
  ],
  imports: [
    CommonModule,
    LadderRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [[{ provide: MAT_DATE_LOCALE, useValue: 'pl-PL' }]]
})
export class LadderModule { }
