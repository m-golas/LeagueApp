import { Component, Input } from '@angular/core';
import { Player } from 'src/app/core/_models/player';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent {
  @Input() players: Array<Player> = [];

  displayedColumns: Array<String> = ['id', 'name', 'team'];

  constructor() { }
}
