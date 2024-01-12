import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../user.utils';

@Component({
  selector: 'view-user-profile',
  templateUrl: './view-user-profile.component.html',
})
export class ViewUserProfileComponent implements OnInit {
    public selectedUserData: User

    constructor(@Inject(MAT_DIALOG_DATA) public data: User) { }

    ngOnInit(): void {
        this.selectedUserData = new User();
        this.selectedUserData.id = this.data.id;
        this.selectedUserData.companyId = this.data.companyId;
        this.selectedUserData.email = this.data.email;
        this.selectedUserData.fullname = this.data.fullname;
        this.selectedUserData.username = this.data.username;
        this.selectedUserData.phone = this.data.phone;
        this.selectedUserData.photo = this.data.photo;
    }

    public editUser(){}

}