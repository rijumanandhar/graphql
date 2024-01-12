import { Component, Inject, OnInit, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../user.utils';

@Component({
  selector: 'view-user-dialog',
  templateUrl: './view-user-dialog.component.html',
})
export class ViewUserDialogComponent implements OnInit {
    public selectedUserData: User
     constructor(@Inject(MAT_DIALOG_DATA) public data: User) { }

     ngOnInit(): void {
        if(this.data){
            this.selectedUserData = new User();
            this.selectedUserData.id = this.data.id;
            this.selectedUserData.companyId = this.data.companyId;
            this.selectedUserData.email = this.data.email;
            this.selectedUserData.fullname = this.data.fullname;
            this.selectedUserData.username = this.data.username;
            this.selectedUserData.phone = this.data.phone;
            this.selectedUserData.photo = this.data.photo;
        }
    }
}