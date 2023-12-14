import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-incoming-matches',
  templateUrl: './incoming-matches.component.html',
  styleUrls: ['./incoming-matches.component.scss']
})
export class IncomingMatchesComponent {
  @Input() matches: Array<any> = []
}
