import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Room } from 'src/app/models/room';
import { EventService } from 'src/app/services/event.service';
import { MatDialog } from '@angular/material/dialog';
import { LeaveRoomDialogComponent } from '../leave-room-dialog/leave-room-dialog.component';
import { User } from 'src/app/models/user';
import { MembersDialogComponent } from '../members-dialog/members-dialog.component';

@Component({
  selector: 'app-room-info',
  templateUrl: './room-info.component.html',
  styleUrls: ['./room-info.component.css']
})
export class RoomInfoComponent implements OnInit {
  @Output() roomSelected = new EventEmitter();
  @Input() room: Room;
  user: User;
  constructor(private eventService: EventService,
              public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  showUsers(){
    const dialogRef= this.dialog.open(MembersDialogComponent,{
      width:'400px',
      maxHeight: '500px',
      data:this.room.users
    });
  }
  showConversation(){
    this.eventService.emitRoomSelected(this.room.roomId);
  }
  leaveRoom(){
    const dialogRef = this.dialog.open(LeaveRoomDialogComponent, {
      data:this.user
    })
  }
}
