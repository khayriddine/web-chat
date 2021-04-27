import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-join-room-dialog',
  templateUrl: './join-room-dialog.component.html',
  styleUrls: ['./join-room-dialog.component.css']
})
export class JoinRoomDialogComponent implements OnInit {

  room: any = {
    name: '',
    password: ''
  };
  constructor(public dialogRef:MatDialogRef<JoinRoomDialogComponent>) { }

  ngOnInit(): void {
  }

}
