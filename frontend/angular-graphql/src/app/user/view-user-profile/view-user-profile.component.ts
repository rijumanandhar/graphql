import { Component, Inject, OnInit, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../user.utils';

@Component({
  selector: 'view-user-profile',
  templateUrl: './view-user-profile.component.html',
})
export class ViewUserProfileComponent implements OnInit {
    @Input() selectedUserData: User


    ngOnInit(): void {
    }

    public editUser(){}

}