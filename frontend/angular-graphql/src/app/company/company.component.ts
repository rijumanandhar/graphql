import { Component, OnInit } from '@angular/core';
import { DELETE_COMPANY, GET_ALL_COMPANY, GET_USERS_BY_COMPANY} from '../graphql.operations'
import { Apollo } from 'apollo-angular';
import { MatDialog } from '@angular/material/dialog';
import { AddCompanyComponent } from './add-company/add-company.component';
import { Company, CompanyColumns, CompanyData} from './company.utils'
import {User, UserColumns, UserData} from '../user/user.utils'
import { ViewUserDialogComponent } from '../user/view-user-dialog/view-user-dialog.component';

@Component({
  selector: 'company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent implements OnInit {
  error: any
  displayedColumnsCompany: string[] = CompanyColumns;
  dataSourceCompany = CompanyData;
  displayedColumnsUser : string[] = UserColumns;
  dataSourceUser : User[];
  public selectedCompany : Company;

  constructor(public dialog: MatDialog, private apollo: Apollo){}

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: GET_ALL_COMPANY
    }).valueChanges.subscribe(({ data, error}: any ) => {
      this.dataSourceCompany = data.getAllCompany;
      this.error = error;
      console.log(this.dataSourceCompany)
    })
  }

  public clickCompany(data:Company){
    this.selectedCompany = new Company();
    this.selectedCompany.id = data.id;
    this.selectedCompany.name = data.name;
    this.selectedCompany.email = data.email;
    this.selectedCompany.phone = data.phone;
    this.selectedCompany.logo = data.logo;
    this.getUserDataByCompany()
  }

  public getUserDataByCompany(){
    this.apollo.watchQuery({
      query: GET_USERS_BY_COMPANY,
      variables: {
        companyId: parseInt(this.selectedCompany.id.toString())
      }
    }).valueChanges.subscribe(({ data, error}: any ) => {
      this.dataSourceUser = data.getAllUSerByCompany;
      this.error = error;
      console.log(this.dataSourceUser)
    })
  }

  public clickUser(data:User){
    const selectedUserData = new User();
    selectedUserData.id = data.id;
    selectedUserData.companyId = data.companyId;
    selectedUserData.email = data.email;
    selectedUserData.fullname = data.fullname;
    selectedUserData.username = data.username;
    selectedUserData.phone = data.phone;
    selectedUserData.photo = data.photo;
    const dialogRef = this.dialog.open(ViewUserDialogComponent, {
      data: selectedUserData,
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('Success');
    });
  }

  public addCompany(){
    console.log('add company')
    const dialogRef = this.dialog.open(AddCompanyComponent, {
      width: '600px',
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('Success');
    });
  }

  public editCompany(){
    const dialogRef = this.dialog.open(AddCompanyComponent, {
      width: '600px',
      data: this.selectedCompany,
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('Success');
    });
  }

  public deleteCompany(){
    this.apollo
    .mutate({
      mutation: DELETE_COMPANY,
      variables: {
        id: this.selectedCompany.id,
      },
    })
    .subscribe(
      ({ data }) => {
        console.log('Successfully Deleted', data);
      },
      error => {
        console.log('there was an error sending the query', error);
      },
    );
  }
}
