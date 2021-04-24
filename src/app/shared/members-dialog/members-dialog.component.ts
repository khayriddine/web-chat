import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-members-dialog',
  templateUrl: './members-dialog.component.html',
  styleUrls: ['./members-dialog.component.css']
})
export class MembersDialogComponent implements OnInit {

  constructor(public dialogReg:MatDialogRef<MembersDialogComponent>, @Inject(MAT_DIALOG_DATA) public users: User[])  { }

  ngOnInit(): void {
  }

}
