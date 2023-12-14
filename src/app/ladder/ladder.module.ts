import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { TeamsLedderPageComponent } from './containers/teams-ledder-page/teams-ledder-page.component';
import { TeamsListComponent } from './components/teams-list/teams-list.component';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { LaddersToggleComponent } from './components/ladders-toggle/ladders-toggle.component';
import { FormsModule } from '@angular/forms';
import { TeamMembersListComponent } from './components/team-members-list/team-members-list.component';
import { LadderRoutingModule } from './ladder-routing.module';
import { IncomingMatchesComponent } from './components/incoming-matches/incoming-matches.component';
import { ChallangesListComponent } from './components/challanges-list/challanges-list.component';
import { LadderContainerComponent } from './containers/ladder-container/ladder-container.component';
import { ChallangeCardComponent } from './components/challange-card/challange-card.component';


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
    ChallangeCardComponent
  ],
  exports: [
    TeamsLedderPageComponent
  ],
  imports: [
    CommonModule,
    LadderRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class LadderModule { }
