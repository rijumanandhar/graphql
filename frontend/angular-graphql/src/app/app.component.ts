import { Component, OnInit } from '@angular/core';
import { GET_USERS} from './graphql.operations'
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-graphql';
  users: any[] = [];
  error: any

  constructor(private appllo: Apollo){

  }

  ngOnInit(): void {
    this.appllo.watchQuery({
      query: GET_USERS
    }).valueChanges.subscribe(({ data, error}: any ) => {
      this.users = data.getAllUsers;
      this.error = error;
      console.log(this.users)
    })
  }
}
