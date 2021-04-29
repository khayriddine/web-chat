import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { Subject } from 'rxjs';
import { Msg } from '../models/msg';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private msg = new Subject<{roomId:string,msg:Msg}>();
  public msg$ = this.msg.asObservable();

  private msgs = new Subject<{roomId:string,msgs:Msg[]}>();
  public msgs$ = this.msgs.asObservable();


  private hubConnection : signalR.HubConnection;
  
  constructor() { }

  public startConnection(){
    this.hubConnection = new signalR.HubConnectionBuilder()
                          .withUrl("https://localhost:5001/chat")
                          .build();
    this.hubConnection.start()
                      .then(() => console.log("Connected !"))
                      .catch((err) => console.log("Error while starting connection: "+err));
  }
  public addSubscriptions(){
    this.hubConnection.on("ReceiveMessage",(user:string, message:string)=>{
      console.log(user + " : "+message);
    });
    this.hubConnection.on("Msg",(roomId:string,msg:Msg)=>{
      this.msg.next({roomId,msg});
    });
    this.hubConnection.on("Msgs",(roomId:string,msgs:Msg[])=>{
      this.msgs.next({roomId,msgs});
    });
  }
  public sendMessage(user: string,message:string){
    this.hubConnection.invoke("SendMessage",user,message);
  }
  public addMember(userId: string){
    this.hubConnection.invoke("AddMember",userId);
  }
  public sendMsg(userId:string,roomId: string,msg:Msg){
    this.hubConnection.invoke("SendMsg",userId,roomId,msg);
  }
  public loadAllMsg(roomId: string){
    this.hubConnection.invoke("LoadAllMsgs",roomId);
  }
}
