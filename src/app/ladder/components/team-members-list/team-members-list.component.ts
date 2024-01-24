import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Members } from 'src/app/core/_models/team';

@Component({
  selector: 'app-team-members-list',
  templateUrl: './team-members-list.component.html',
  styleUrls: ['./team-members-list.component.scss']
})
export class TeamMembersListComponent {
  @Input() members: Array<Members> = []
  @Input() isOwner: boolean | null = false;
  @Output() invite = new EventEmitter()

  openInvitation(): void {
    this.invite.emit();
  }
}
