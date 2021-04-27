import { Injectable } from '@angular/core';
import { Room } from '../models/room';
import { environment as env } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

const roomApiUrl = env.apiUrl + '/rooms';
@Injectable({
  providedIn: 'root'
})
export class RoomService {

  rooms: Room[] = [
    /*
    {
      name: 'my Room',
      roomId: '1',
      adminId: 1,
      users: [      
        {userId: 1,
        name: 'khayri',
        password:'123',
        image: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg'
      }, {
        userId: 2,
        name: 'sameh',
        password:'123',
        image: 'https://randomuser.me/api/portraits/thumb/lego/2.jpg'
      },
      {
      userId: 3,
      name: 'manel',
      password:'123',
      image: 'https://randomuser.me/api/portraits/thumb/lego/3.jpg'
    },
    ],
      allMsgs: [{
        user: 'manel',
        content: 'Hi',
        image: 'https://randomuser.me/api/portraits/thumb/lego/3.jpg'
      },
      {
        user: 'khayri',
        content: 'Hello',
        image: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg'
      }],
      unreadMsgs: [      {
        user: 'manel',
        content: 'bye !',
        image: 'https://randomuser.me/api/portraits/thumb/lego/3.jpg'
      }],
    },
    {
      name: 'my Room 2',
      roomId: '2',
      adminId: 2,
      users: [  {
        userId: 2,
        name: 'sameh',
        password:'123',
        image: 'https://randomuser.me/api/portraits/thumb/lego/2.jpg'
      },
      {
      userId: 3,
      name: 'manel',
      password:'123',
      image: 'https://randomuser.me/api/portraits/thumb/lego/3.jpg'
    },
    ],
      allMsgs: [{
        user: 'manel',
        content: 'Yo',
        image: 'https://randomuser.me/api/portraits/thumb/lego/3.jpg'
      },
      {
        user: 'sameh',
        content: 'ahla',
        image: 'https://randomuser.me/api/portraits/thumb/lego/2.jpg'
      }],
      unreadMsgs: [      {
        user: 'manel',
        content: 'bye !',
        image: 'https://randomuser.me/api/portraits/thumb/lego/3.jpg'
      }],
    }*/
  ]
  constructor(private http: HttpClient) { }
  getAllRooms(){
    return this.rooms;
  }
  create(room: Room){
    return this.http.post<boolean>(roomApiUrl,room);
  }
}
