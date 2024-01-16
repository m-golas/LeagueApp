import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Challange } from 'src/app/core/_models/challange';

@Component({
  selector: 'app-matches-awaiting-scoring',
  templateUrl: './matches-awaiting-scoring.component.html',
  styleUrls: ['./matches-awaiting-scoring.component.scss']
})
export class MatchesAwaitingScoringComponent {
  @Input() matches: Array<Challange> | null = []; 
  @Output() resolveChallange = new EventEmitter<Challange>()
  @Output() showChallange = new EventEmitter<Challange>()

  show(challange: Challange) {
    this.showChallange.emit(challange)
  }

  resolve(challange: Challange) {
    this.resolveChallange.emit(challange)
  }
}
