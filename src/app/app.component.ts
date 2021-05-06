import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RoomService } from './services/room.service';
import { Room } from './models/room';
import { ChatService } from './services/chat.service';
import { EventService } from './services/event.service';
import { Subscription } from 'rxjs';
import { UserService } from './services/user.service';
import { User } from './models/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserCredential } from './models/user-credential';
import { stringify } from '@angular/compiler/src/util';
import { Msg } from './models/msg';
import { AzureSignalrChatService } from './services/azure-signalr-chat.service';

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
  user: User = null;


  subscriptions = new Subscription();
  constructor(private snackBar:MatSnackBar,
              private eventService: EventService,
              private userService: UserService,
              private roomService: RoomService,
              private chatService: ChatService) { }

  ngOnInit(): void {
    
    this.chatService.startConnection();
    this.chatService.addSubscriptions();
    this.user = JSON.parse(sessionStorage.getItem("user"));

    this.subscriptions.add(this.eventService.selectedRoom$.subscribe((r: string)=>{
      this.toggle();
      this.selectedRoom = this.user.rooms.find(ro => ro.roomId == r); 
      if(this.selectedRoom != null){
        if(this.selectedRoom.unreadMsgs != null && this.selectedRoom.unreadMsgs.length > 0)
        {
          this.selectedRoom.allMsgs.push(...this.selectedRoom.unreadMsgs);
          this.selectedRoom.unreadMsgs = [];
        }
      }
    }));
    this.subscriptions.add(this.eventService.userRegistration$.subscribe((u: User) => {
      this.userService.register(u).subscribe((us:User)=>{
        
      });
    }));
    this.subscriptions.add(this.eventService.userLogin$.subscribe((uc:UserCredential)=>{
      this.userService.login(uc).subscribe((user:User)=>{

        this.updateUserRelatedInfo(user);
        
      });
    }));
    this.subscriptions.add(this.eventService.notif$.subscribe((msg: string)=>{
      if(msg == 'disconnect')
        {
          this.user = null;
          sessionStorage.removeItem("user");
          
        }
        else if(msg == 'refresh'){
          this.userService.getUser(this.user.userId).subscribe((user:User)=>{
            this.updateUserRelatedInfo(user);
          })
        }
        else if(msg == 'load'){
          if(this.selectedRoom != null){
            this.chatService.loadAllMsg(this.selectedRoom.roomId);
          }
        }
    }));
    this.subscriptions.add(this.eventService.msg$.subscribe(({roomId,msg})=>{
      let message : Msg = {
        name: this.user.name,
        content: msg,
        image: this.user.image,
      }
      this.chatService.sendMsg(this.user.userId,roomId,message);
    }));
    this.subscriptions.add(this.chatService.msgs$.subscribe(({roomId,msgs})=>{
      if(this.selectedRoom != null && this.selectedRoom.roomId == roomId){
        this.selectedRoom.allMsgs = [];
        this.selectedRoom.allMsgs.push(...msgs);
      }
      
    }));
    this.subscriptions.add(this.chatService.msg$.subscribe(({roomId,msg})=>{
      if(this.selectedRoom != null && this.selectedRoom.roomId == roomId){
        if(this.selectedRoom.allMsgs == null)
        this.selectedRoom.allMsgs = [];
        this.selectedRoom.allMsgs.push(msg);
      }else {
        var ro = this.user.rooms.find(r => r.roomId == roomId);
        if(ro != null){
          if(this.user.rooms[roomId].unreadMsgs == null)
            this.user.rooms[roomId].unreadMsgs = [];
            this.user.rooms[roomId].unreadMsgs.push(msg);
        }
      }
      
    }));
    this.subscriptions.add(this.eventService.roomEvt$.subscribe((roomEvt)=>{
      if(roomEvt.name == 'creation'){
        roomEvt.room.adminId = this.user.userId;
        this.roomService.create(roomEvt.room).subscribe((result: boolean)=>{
          if(result == true){
            this.userService.getUser(this.user.userId).subscribe((user: User)=>{
              
              this.updateUserRelatedInfo(user);
            })
          }
        })
      }
      else if(roomEvt.name == 'joining'){
        this.userService.join(this.user.userId,roomEvt.room).subscribe((result:boolean)=>{
          if(result == true){
            this.userService.getUser(this.user.userId).subscribe((user: User)=>{
              this.updateUserRelatedInfo(user);
            })
          }
        })
      }
      else if(roomEvt.name == 'leaving'){
        this.userService.leave(this.user.userId,roomEvt.room.roomId).subscribe((result:boolean)=>{
          if(result == true){
            this.userService.getUser(this.user.userId).subscribe((user: User)=>{
              this.updateUserRelatedInfo(user);
            })
          }
        })
      }
    }));
  }
  updateUserRelatedInfo(user: User){
    this.user = user;
    sessionStorage.setItem("user",JSON.stringify(user));
    this.chatService.addMember(this.user.userId);
  }
  toggle(){
    if(this.user == null){
      this.snackBar.open("You need to log in first","Dismiss");
    }else{
      this.opened = !this.opened;
    }
    
  }
}
