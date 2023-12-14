import { Component, Input } from '@angular/core';
import { Player } from 'src/app/core/_models/player';

@Component({
  selector: 'app-team-members-list',
  templateUrl: './team-members-list.component.html',
  styleUrls: ['./team-members-list.component.scss']
})
export class TeamMembersListComponent {
  @Input() members: Array<Player> = []
  @Input() isOwner: boolean = false;
}
