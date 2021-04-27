import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-leave-room-dialog',
  templateUrl: './leave-room-dialog.component.html',
  styleUrls: ['./leave-room-dialog.component.css']
})
export class LeaveRoomDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LeaveRoomDialogComponent>) { }

  ngOnInit(): void {
  }
  

}
