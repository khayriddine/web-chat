import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Room } from '../models/room';
import { RoomService } from '../services/room.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateRoomDialogComponent } from '../shared/create-room-dialog/create-room-dialog.component';
import { RoomCredential } from '../models/room-credeantial';
import { JoinRoomDialogComponent } from '../shared/join-room-dialog/join-room-dialog.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  @Input() rooms: Room[];

constructor(public dialog: MatDialog) {
}
  ngOnInit(): void {
  }
  drop(event: CdkDragDrop<Room[]>) {
    moveItemInArray(this.rooms, event.previousIndex, event.currentIndex);
  }
  createRoom(){
    const dialogRef = this.dialog.open(CreateRoomDialogComponent);
  }
  joinRoom(){
    const dialogRef = this.dialog.open(JoinRoomDialogComponent);
  }
}
