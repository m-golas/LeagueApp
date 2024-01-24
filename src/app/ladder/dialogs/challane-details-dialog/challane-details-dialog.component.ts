import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Challange, ChallangeFull } from 'src/app/core/_models/challange';

@Component({
  selector: 'app-challane-details-dialog',
  templateUrl: './challane-details-dialog.component.html',
  styleUrls: ['./challane-details-dialog.component.scss'],
})
export class ChallaneDetailsDialogComponent {
  sportName: Record<string, string> = {
    DRAW: 'Remis',
    CHALLENGER_WON: 'Wygrana wyzywającego',
    CHALLANGER_LOSE: 'Wygrana wyzwanego',
  };


  constructor(
    public dialogRef: MatDialogRef<ChallaneDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ChallangeFull
  ) {}
}
