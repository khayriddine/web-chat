import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RoomService } from './services/room.service';
import { Room } from './models/room';
import { ChatService } from './services/chat.service';
import { EventService } from './services/event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'web-chat';
  opened: boolean = false;
  rooms: Room[] = [];
  selectedRoom: Room;


  subscriptions = new Subscription();
  constructor(private eventService: EventService,
              private roomService: RoomService,
              private chatService: ChatService) { }

  ngOnInit(): void {

    this.rooms = this.roomService.getAllRooms();
    this.subscriptions.add(this.eventService.selectedRoom$.subscribe((r: string)=>{
      this.selectedRoom = this.rooms.find(ro => ro.roomId == r); 
      if(this.selectedRoom != null){
        if(this.selectedRoom.unreadMsgs != null && this.selectedRoom.unreadMsgs.length > 0)
        {
          this.selectedRoom.allMsgs.push(...this.selectedRoom.unreadMsgs);
          this.selectedRoom.unreadMsgs = [];
        }
      }
    }));
  }
  toggle(){
    this.opened = !this.opened;
  }
}
