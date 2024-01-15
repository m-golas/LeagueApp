import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Challange } from 'src/app/core/_models/challange';

@Component({
  selector: 'app-incoming-matches',
  templateUrl: './incoming-matches.component.html',
  styleUrls: ['./incoming-matches.component.scss']
})
export class IncomingMatchesComponent {
  @Input() matches: Array<Challange> | null = []
  @Output() showChallange = new EventEmitter<Challange>()

  show(challange: Challange) {
    this.showChallange.emit(challange)
  }
}
