import { Component, Inject, OnInit, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { User } from '../user.utils';
import { AddEditUserComponent } from '../add-edit-user/add-edit-user.component';

@Component({
  selector: 'view-user-profile',
  templateUrl: './view-user-profile.component.html',
})
export class ViewUserProfileComponent implements OnInit {
    @Input() selectedUserData: User

    constructor(public dialog: MatDialog){}

    ngOnInit(): void {
    }

    public editUser(){
      const dialogRef = this.dialog.open(AddEditUserComponent, {
        width: '600px',
        data: this.selectedUserData,
      })
    }

}