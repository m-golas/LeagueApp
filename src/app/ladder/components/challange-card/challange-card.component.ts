import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Challange, ChallangeFull } from 'src/app/core/_models/challange';

@Component({
  selector: 'app-challange-card',
  templateUrl: './challange-card.component.html',
  styleUrls: ['./challange-card.component.scss']
})
export class ChallangeCardComponent {
  @Input() challange: Observable<ChallangeFull> | undefined;
  @Input() controls: boolean = true;
  @Input() showResolve: boolean = false;

  @Output() acceptChallange = new EventEmitter<ChallangeFull["id"]>();
  @Output() declineChallange = new EventEmitter<ChallangeFull["id"]>();
  @Output() showChallange = new EventEmitter<ChallangeFull>();
  @Output() resolveChallange = new EventEmitter<ChallangeFull>();

  accept(id: ChallangeFull["id"]) {
    this.acceptChallange.emit(id);
  }

  decline(id: ChallangeFull["id"]) {
    this.declineChallange.emit(id);
  }

  show(challange: ChallangeFull) {
    this.showChallange.emit(challange);
  }

  resolve(challange: ChallangeFull) {
    this.resolveChallange.emit(challange);
  }
}
