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
import {UserColumns, UserData} from '../user/user.utils'

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

  public addCompany(){
    const dialogRef = this.dialog.open(AddCompanyComponent//, {
     // data: {name: null, animal: null},
    //}
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('Success');
      // this.animal = result;
    });
  }
}
