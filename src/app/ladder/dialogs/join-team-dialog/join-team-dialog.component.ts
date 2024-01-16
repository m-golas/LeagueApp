import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-join-team-dialog',
  templateUrl: './join-team-dialog.component.html',
  styleUrls: ['./join-team-dialog.component.scss']
})
export class JoinTeamDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<JoinTeamDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  joinForm: FormGroup = new FormGroup({
    code: new FormControl(undefined, Validators.required),
  });
}
