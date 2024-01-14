import { Component, OnInit } from '@angular/core';
import { Company, CompanyColumns, CompanyData} from '../company/company.utils'
import { Apollo } from 'apollo-angular';
import { GET_ALL_COMPANY, GET_USERS } from '../graphql.operations';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  error: any
  displayedColumnsCompany: string[] = CompanyColumns;
  companyCount: number = 0
  userCount: number = 0
  public dataSourceCompany: any;

  constructor(private apollo: Apollo){}

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: GET_ALL_COMPANY
    }).valueChanges.subscribe(({ data, error}: any ) => {
      this.dataSourceCompany = data.getAllCompany;
      this.companyCount = data.getAllCompany.length;
      this.error = error;
    })

    this.apollo.watchQuery({
      query: GET_USERS
    }).valueChanges.subscribe(({ data, error}: any ) => {
      this.userCount = data.getAllUsers.length;
      this.error = error;
    })
   
  }
}
