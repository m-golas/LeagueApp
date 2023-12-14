import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Challange } from 'src/app/core/_models/challange';

@Component({
  selector: 'app-challanges-list',
  templateUrl: './challanges-list.component.html',
  styleUrls: ['./challanges-list.component.scss']
})
export class ChallangesListComponent {
  @Input() challanges$!: Observable<Array<Challange>>; 

  @Output() acceptChallange = new EventEmitter<Challange["id"]>();
  @Output() declineChallange = new EventEmitter<Challange["id"]>();

  accept(id: Challange["id"]) {
    this.acceptChallange.emit(id);
  }

  decline(id: Challange["id"]) {
    this.declineChallange.emit(id);
  }
}
