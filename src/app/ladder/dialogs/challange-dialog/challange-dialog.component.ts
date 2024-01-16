import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ChallangeRequest } from 'src/app/core/_models/challange-request';


@Component({
  selector: 'app-challange-dialog',
  templateUrl: './challange-dialog.component.html',
  styleUrls: ['./challange-dialog.component.scss'],
})
export class ChallangeDialogComponent {
  minDate: Date;

  constructor(
    public dialogRef: MatDialogRef<ChallangeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ChallangeRequest
  ) {
    const date = new Date();
    this.minDate = new Date(date.setDate(date.getDate() + 1));
  }

  challangeForm: FormGroup = new FormGroup({
    date: new FormControl(undefined, Validators.required),
    comment: new FormControl('', Validators.required),
  });

  getData() {
    return { ...this.data, ...this.challangeForm.value };
  }
}
