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
    comment: new FormControl(''),
    location: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
  });

  getData() {
    const time = new Date(this.challangeForm.value['date']);
    time.setHours(this.challangeForm.value['time'].split(':')[0]);
    time.setMinutes(this.challangeForm.value['time'].split(':')[1]);

    return {
      location: this.challangeForm.value['location'],
      comment: this.challangeForm.value['comment'],
      challengedId: this.data.team.id,
      matchTime: `${makeItZero(time.getFullYear())}-${makeItZero(
        time.getMonth() + 1
      )}-${makeItZero(time.getUTCDate())} ${makeItZero(
        time.getHours()
      )}:${makeItZero(time.getMinutes())}:${makeItZero(time.getSeconds())}`,
    };
  }
}

const makeItZero = (a: number): string => {
  return String(a).padStart(2, '0');
};
