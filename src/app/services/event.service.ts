import { Injectable } from '@angular/core';
import { Room } from '../models/room';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private selectedRoom = new Subject<string>();
  public selectedRoom$ = this.selectedRoom.asObservable();
  constructor() {
   }

   emitRoomSelected(r: string){
     this.selectedRoom.next(r);
   }
  }
