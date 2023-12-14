import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Team } from 'src/app/core/_models/team';
import { TeamWithMembers } from 'src/app/core/_models/team-with-members';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent {
  @Input() teams: Array<Team> = [];
  @Input() playerTeam: TeamWithMembers | null | undefined

  @Output() challangeTeam = new EventEmitter<Team>();

  displayedColumns: Array<String> = ['id', 'name', 'points', 'action'];

  constructor() { }

  challangeTeamAction(team: Team): void {
    this.challangeTeam.emit(team);
  }

}
