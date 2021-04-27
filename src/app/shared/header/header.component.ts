import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { UserCredential } from 'src/app/models/user-credential';
import { EventService } from 'src/app/services/event.service';
import { ConfigDialogComponent } from '../config-dialog/config-dialog.component';
import { ConnectionDialogComponent } from '../connection-dialog/connection-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideEvt = new EventEmitter();
  @Input() login : boolean;
  constructor(private dialog: MatDialog,
              private eventService: EventService) {
    

  }

  ngOnInit(): void {
  }
  toggle_child(){
    this.toggleSideEvt.emit();
  }
  openSettingsDialog(){
    const dialogRef = this.dialog.open(ConfigDialogComponent);
  }
  openConnectionDialog(){
    const dialogRef = this.dialog.open(ConnectionDialogComponent);
    dialogRef.afterClosed().subscribe((u: any) => {
      if(u.image){
        let us: User = {
          name : u.name,
          password: u.password,
          image: u.image,
          rooms: []
        };
        this.eventService.emitUserRegistration(u);
      }
      else{
        this.eventService.emitUserLogin(u);
      }
    });
  }
  logout(){
    this.eventService.emitUserDisconnect();
  }

}
