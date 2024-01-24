import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Challange, ChallangeFull } from 'src/app/core/_models/challange';
import { ChallangeService } from 'src/app/core/_services/challange.service';

@Component({
  selector: 'app-matches-awaiting-scoring',
  templateUrl: './matches-awaiting-scoring.component.html',
  styleUrls: ['./matches-awaiting-scoring.component.scss']
})
export class MatchesAwaitingScoringComponent {
  @Input() matches: Array<Challange> | null = []; 
  @Output() resolveChallange = new EventEmitter<ChallangeFull>()
  @Output() showChallange = new EventEmitter<ChallangeFull>()

  constructor(private challange: ChallangeService){}

 matches$ = this.matches?.map(match => {
    return this.challange.getChallange(match.id)
  })

  show(challange: ChallangeFull) {
    this.showChallange.emit(challange)
  }

  resolve(challange: ChallangeFull) {
    this.resolveChallange.emit(challange)
  }
}
