import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-connection-dialog',
  templateUrl: './connection-dialog.component.html',
  styleUrls: ['./connection-dialog.component.css']
})
export class ConnectionDialogComponent implements OnInit {
  titles = ['Sign In','Sign Up'];
  user: any = {
    name: '',
    password: ''
  };
  constructor(public dialogRef: MatDialogRef<ConnectionDialogComponent>) { }

  ngOnInit(): void {
  }
  titles_show(ind :number){
    return this.titles[ind];
  }
}
