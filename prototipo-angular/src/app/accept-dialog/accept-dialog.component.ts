import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'protangu-accept-dialog',
  templateUrl: './accept-dialog.component.html',
  styleUrls: ['./accept-dialog.component.scss']
})
export class AcceptDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AcceptDialogComponent>) {}

  aceptar(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
