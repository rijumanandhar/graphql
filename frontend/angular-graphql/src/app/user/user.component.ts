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

  public clickUser(data: User){}

  public addUser(){}
}
