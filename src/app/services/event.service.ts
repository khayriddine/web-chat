import { Injectable } from '@angular/core';
import { Room } from '../models/room';
import { Subject, Observable } from 'rxjs';
import { User } from '../models/user';
import { UserCredential } from '../models/user-credential';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private selectedRoom = new Subject<string>();
  public selectedRoom$ = this.selectedRoom.asObservable();

  private userRegistration = new Subject<User>();
  public userRegistration$ = this.userRegistration.asObservable();

  private userLogin = new Subject<UserCredential>();
  public userLogin$ = this.userLogin.asObservable();

  private notif = new Subject<string>();
  public notif$ = this.notif.asObservable();

  private roomEvt = new Subject<{name : string,room: Room}>();
  public roomEvt$ = this.roomEvt.asObservable();

  constructor() {
   }

   emitRoomSelected(r: string){
     this.selectedRoom.next(r);
   }
   emitUserRegistration(user: User){
     this.userRegistration.next(user);
   }
   emitUserLogin(uc: UserCredential){
     this.userLogin.next(uc);
   }
   emitUserDisconnect(){
     this.notif.next('disconnect');
   }
   emitRoomCreated(room: Room){
    this.roomEvt.next({name:'creation',room});
   }
   emitJoiningRoom(room:Room){
     this.roomEvt.next({name:'joining',room});
   }
   emitLeavingRoom(room:Room){
    this.roomEvt.next({name:'leaving',room});
  }
  emitNotif(msg:string){
    this.notif.next(msg);
  }
  }
