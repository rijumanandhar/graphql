import { Component, OnInit } from '@angular/core';
import {User, UserColumns, UserData} from './user.utils'


@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  public dataSourceUser = UserData;
  public displayedColumnsUser = UserColumns;
  public selectedUser : User;

  ngOnInit(): void {
   
  }

  public clickUser(data: User){
    this.selectedUser = new User();
    this.selectedUser.id = data.id;
    this.selectedUser.companyId = data.companyId;
    this.selectedUser.email = data.email;
    this.selectedUser.fullname = data.fullname;
    this.selectedUser.username = data.username;
    this.selectedUser.phone = data.phone;
    this.selectedUser.photo = data.photo;
  }

  public addUser(){}
}
