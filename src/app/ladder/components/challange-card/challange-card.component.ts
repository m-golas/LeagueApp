import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Challange } from 'src/app/core/_models/challange';

@Component({
  selector: 'app-challange-card',
  templateUrl: './challange-card.component.html',
  styleUrls: ['./challange-card.component.scss']
})
export class ChallangeCardComponent {
  @Input() challange: Challange | undefined;

  @Output() acceptChallange = new EventEmitter<Challange["id"]>();
  @Output() declineChallange = new EventEmitter<Challange["id"]>();

  accept(id: Challange["id"]) {
    this.acceptChallange.emit(id);
  }

  decline(id: Challange["id"]) {
    this.declineChallange.emit(id);
  }
}
