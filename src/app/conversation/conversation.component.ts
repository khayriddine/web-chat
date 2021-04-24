import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../models/room';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  @Input() selectedRoom:Room;
  constructor() { }

  ngOnInit(): void {
  }

  send(){

  }
}
