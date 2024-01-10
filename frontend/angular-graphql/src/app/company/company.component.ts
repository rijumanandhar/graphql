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
import { Company, CompanyColumns, CompanyData} from './company.util'

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent implements OnInit {
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
  // dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  displayedColumns: string[] = CompanyColumns;
  dataSource = CompanyData;
  // clickedRows = new Set<PeriodicElement>();

  constructor(public dialog: MatDialog){}
  ngOnInit(): void {
   
  }

  public clickCompany(data:any){
    console.log(data);
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
