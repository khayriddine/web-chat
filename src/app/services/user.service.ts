import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { environment as env } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserCredential } from '../models/user-credential';
import { RoomCredential } from '../models/room-credential';

const userApiUrl =  env.apiUrl + '/users';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [  ];
  
  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.users;
  }
  getUser(userId: string){
    return this.http.get<User>(userApiUrl+'/'+userId);
  }
  register(user: User){
    return this.http.post<User>(userApiUrl+'/register',user);
  }
  login(uc:UserCredential){
    return this.http.post<User>(userApiUrl+'/auth',uc);
  }
  join(userId: string,rc:RoomCredential){
    return this.http.post<boolean>(userApiUrl+'/join/'+userId,rc);
  }
  leave(userId:string, roomId:string){
    return this.http.get<boolean>(userApiUrl+'/leave/'+userId+'/'+roomId);
  }
}
