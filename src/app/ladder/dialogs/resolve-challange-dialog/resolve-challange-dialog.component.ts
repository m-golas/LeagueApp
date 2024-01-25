import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ChallangeFull } from 'src/app/core/_models/challange';

@Component({
  selector: 'app-resolve-challange-dialog',
  templateUrl: './resolve-challange-dialog.component.html',
  styleUrls: ['./resolve-challange-dialog.component.scss'],
})
export class ResolveChallangeDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ResolveChallangeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ChallangeFull
  ) {}

  challangeForm: FormGroup = new FormGroup({
    yourScore: new FormControl(0, Validators.required),
    enemyScore: new FormControl(0, Validators.required),
  });

  getData() {
    return {
      id: this.data.id,
      challengerID: this.data.challenger.id,
      challengedID: this.data.challenged.id,
      result: {
        yourScore: this.challangeForm.value["yourScore"],
        enemyScore: this.challangeForm.value["enemyScore"]
      },
    };
  }
}
