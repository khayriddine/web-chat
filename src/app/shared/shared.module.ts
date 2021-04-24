import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionDialogComponent } from './connection-dialog/connection-dialog.component';
import { ConfigDialogComponent } from './config-dialog/config-dialog.component';
import { CreateRoomDialogComponent } from './create-room-dialog/create-room-dialog.component';
import { HeaderComponent } from './header/header.component';
import { MaterialsModule } from '../materials.module';
import { RoomInfoComponent } from './room-info/room-info.component';
import { NotificationDialogComponent } from './notification-dialog/notification-dialog.component';
import { LeaveRoomDialogComponent } from './leave-room-dialog/leave-room-dialog.component';
import { MembersDialogComponent } from './members-dialog/members-dialog.component';
import { JoinRoomDialogComponent } from './join-room-dialog/join-room-dialog.component';



@NgModule({
  declarations: [
    ConnectionDialogComponent,
    ConfigDialogComponent,
    CreateRoomDialogComponent,
    HeaderComponent,
    RoomInfoComponent,
    NotificationDialogComponent,
    LeaveRoomDialogComponent,
    MembersDialogComponent,
    JoinRoomDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule
  ],
  exports: [
    ConnectionDialogComponent,
    ConfigDialogComponent,
    CreateRoomDialogComponent,
    HeaderComponent,
    RoomInfoComponent
  ]
})
export class SharedModule { }
