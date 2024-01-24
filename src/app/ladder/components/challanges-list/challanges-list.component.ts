import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Challange, ChallangeFull } from 'src/app/core/_models/challange';
import { ChallangeService } from 'src/app/core/_services/challange.service';

@Component({
  selector: 'app-challanges-list',
  templateUrl: './challanges-list.component.html',
  styleUrls: ['./challanges-list.component.scss']
})
export class ChallangesListComponent {
  @Input() challanges: Array<Challange> | null = []; 

  @Output() acceptChallange = new EventEmitter<Challange["id"]>();
  @Output() declineChallange = new EventEmitter<Challange["id"]>();
  @Output() showChallange = new EventEmitter<ChallangeFull>();

  constructor(private challange: ChallangeService){}

  matches$ = this.challanges?.map(match => {
    return this.challange.getChallange(match.id)
  })


  accept(id: Challange["id"]) {
    this.acceptChallange.emit(id);
  }

  decline(id: Challange["id"]) {
    this.declineChallange.emit(id);
  }

  show(challange: ChallangeFull) {
    this.showChallange.emit(challange)
  }
}
