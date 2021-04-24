import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-connection-dialog',
  templateUrl: './connection-dialog.component.html',
  styleUrls: ['./connection-dialog.component.css']
})
export class ConnectionDialogComponent implements OnInit {
  titles = ['Sign In','Sign Up'];
  constructor(public dialogRef: MatDialogRef<ConnectionDialogComponent>) { }

  ngOnInit(): void {
  }
  getTitle(){
    return "Sign In";
  }

}
