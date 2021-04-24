import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    {
      userId: 1,
      name: 'khayri',
      password:'123',
      image: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg'
    },
    {
      userId: 2,
      name: 'sameh',
      password:'123',
      image: 'https://randomuser.me/api/portraits/thumb/lego/2.jpg'
    },
    {
      userId: 1,
      name: 'manel',
      password:'123',
      image: 'https://randomuser.me/api/portraits/thumb/lego/3.jpg'
    },
  ];
  constructor() { }

  getAllUsers(){
    return this.users;
  }
}
