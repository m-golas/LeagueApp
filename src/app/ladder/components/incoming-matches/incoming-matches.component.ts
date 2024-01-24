import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Challange, ChallangeFull } from 'src/app/core/_models/challange';
import { ChallangeService } from 'src/app/core/_services/challange.service';

@Component({
  selector: 'app-incoming-matches',
  templateUrl: './incoming-matches.component.html',
  styleUrls: ['./incoming-matches.component.scss']
})
export class IncomingMatchesComponent {
  @Input() matches: Array<Challange> | null = []
  @Output() showChallange = new EventEmitter<ChallangeFull>()

  constructor(private challange: ChallangeService){}

  matches$ = this.matches?.map(match => {
    return this.challange.getChallange(match.id)
  })

  show(challange: ChallangeFull) {
    this.showChallange.emit(challange)
  }
}
