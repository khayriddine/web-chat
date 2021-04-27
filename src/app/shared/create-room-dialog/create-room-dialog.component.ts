import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Room } from 'src/app/models/room';

@Component({
  selector: 'app-create-room-dialog',
  templateUrl: './create-room-dialog.component.html',
  styleUrls: ['./create-room-dialog.component.css']
})
export class CreateRoomDialogComponent implements OnInit {
  room : any = {
    name: '',
    password: ''
  };
  constructor(public dialogRef:MatDialogRef<CreateRoomDialogComponent>) { }

  ngOnInit(): void {
  }


}
