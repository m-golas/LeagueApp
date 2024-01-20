import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ladders-toggle',
  templateUrl: './ladders-toggle.component.html',
  styleUrls: ['./ladders-toggle.component.scss']
})
export class LaddersToggleComponent {
  @Input() selected = "teams"
  @Input() isOwner: boolean | null | undefined = false;
  @Input() hasTeam: boolean | null | undefined = false;
 
  @Output() selectionChange = new EventEmitter<string>();

  changeSelection(value: string): void {
    this.selectionChange.emit(value);
  }
}
