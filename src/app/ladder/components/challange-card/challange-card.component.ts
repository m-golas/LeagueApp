import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Challange } from 'src/app/core/_models/challange';

@Component({
  selector: 'app-challange-card',
  templateUrl: './challange-card.component.html',
  styleUrls: ['./challange-card.component.scss']
})
export class ChallangeCardComponent {
  @Input() challange: Challange | undefined;
  @Input() controls: boolean = true;
  @Input() showResolve: boolean = false;

  @Output() acceptChallange = new EventEmitter<Challange["id"]>();
  @Output() declineChallange = new EventEmitter<Challange["id"]>();
  @Output() showChallange = new EventEmitter<Challange>();
  @Output() resolveChallange = new EventEmitter<Challange>();

  accept(id: Challange["id"]) {
    this.acceptChallange.emit(id);
  }

  decline(id: Challange["id"]) {
    this.declineChallange.emit(id);
  }

  show(challange: Challange) {
    this.showChallange.emit(challange);
  }

  resolve(challange: Challange) {
    this.resolveChallange.emit(challange);
  }
}
