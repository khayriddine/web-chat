import { Component, OnInit, Input, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Room } from '../models/room';
import { ChatService } from '../services/chat.service';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit, AfterViewChecked {

  @Input() selectedRoom:Room;
  @Input() name:string;
  @ViewChild("ScrollMe") private myScrollContainer : ElementRef;
  message: string ="";
  constructor(private eventService:EventService,
              private snackBar: MatSnackBar) { }
  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  ngOnInit(): void {
    this.scrollToBottom();
  }

  send(){
    if(this.message != ''){
      this.eventService.emitMessageSent(this.selectedRoom.roomId,this.message);
      this.message = '';
    }
    else {
      this.snackBar.open("Please enter a text to submi !","Dismiss");
    }

  }
  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
}
}
