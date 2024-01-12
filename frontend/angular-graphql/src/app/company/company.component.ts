import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
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
  displayedColumnsCompany: string[] = CompanyColumns;
  dataSourceCompany = CompanyData;
  displayedColumnsUser : string[] = UserColumns;
  dataSourceUser = UserData;
  public selectedCompany : Company;

  constructor(public dialog: MatDialog){}
  ngOnInit(): void {
   
  }

  public clickCompany(data:Company){
    console.log(data);
    this.selectedCompany = new Company();
    this.selectedCompany.id = data.id;
    this.selectedCompany.companyName = data.companyName;
    this.selectedCompany.email = data.email;
    this.selectedCompany.phoneNumber = data.phoneNumber;
    this.selectedCompany.companyLogo = data.companyLogo;
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
      height: '400px',
      width: '600px',
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('Success');
    });
  }

  public editCompany(){
    const dialogRef = this.dialog.open(AddCompanyComponent, {
      height: '400px',
      width: '600px',
      data: this.selectedCompany,
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('Success');
    });
  }
}
