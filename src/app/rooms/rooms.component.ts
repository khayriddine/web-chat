import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Room } from '../models/room';
import { RoomService } from '../services/room.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateRoomDialogComponent } from '../shared/create-room-dialog/create-room-dialog.component';
import { RoomCredential } from '../models/room-credential';
import { JoinRoomDialogComponent } from '../shared/join-room-dialog/join-room-dialog.component';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  @Input() rooms: Room[];
  hid : boolean = false;
constructor(public dialog: MatDialog,
            private eventService: EventService) {
}
  ngOnInit(): void {
  }
  drop(event: CdkDragDrop<Room[]>) {
    moveItemInArray(this.rooms, event.previousIndex, event.currentIndex);
  }
  createRoom(){
    const dialogRef = this.dialog.open(CreateRoomDialogComponent);
    dialogRef.afterClosed().subscribe((room : Room) =>{
      this.eventService.emitRoomCreated(room);
    })
  }
  joinRoom(){
    const dialogRef = this.dialog.open(JoinRoomDialogComponent);
    dialogRef.afterClosed().subscribe((room: Room)=>{
      this.eventService.emitJoiningRoom(room);
    })
  }
  refresh(){
    this.eventService.emitNotif("refresh");
  }
}
