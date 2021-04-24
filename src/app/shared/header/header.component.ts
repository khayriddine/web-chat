import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfigDialogComponent } from '../config-dialog/config-dialog.component';
import { ConnectionDialogComponent } from '../connection-dialog/connection-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideEvt = new EventEmitter();
  constructor(private dialog: MatDialog) {
    

  }

  ngOnInit(): void {
  }
  toggle(){
    this.toggleSideEvt.emit();
  }
  openSettingsDialog(){
    const dialogRef = this.dialog.open(ConfigDialogComponent);
  }
  openConnectionDialog(){
    const dialogRef = this.dialog.open(ConnectionDialogComponent);
  }

}
