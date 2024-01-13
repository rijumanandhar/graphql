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

  constructor(){}

  ngOnInit(): void {}
}
