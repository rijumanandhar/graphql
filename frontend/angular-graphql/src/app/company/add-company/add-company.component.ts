import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Company } from '../company.utils';
import { FormControl, FormGroup } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { CREATE_COMPANY, UPDATE_COMPANY } from '../../graphql.operations';

@Component({
  selector: 'add-company',
  templateUrl: './add-company.component.html',
  styleUrl: './add-company.component.css'
})
export class AddCompanyComponent implements OnInit {
  public updateMode = false;
  public companyFormGroup = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    photo: new FormControl(''),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Company,
    private apollo: Apollo,
    public dialogRef: MatDialogRef<AddCompanyComponent>,
  ) { }
  
  ngOnInit(): void {
   if(this.data){
    this.updateMode = true;
    this.companyFormGroup.get('name')?.setValue(this.data.name);
    this.companyFormGroup.get('phone')?.setValue(this.data.phone);
    this.companyFormGroup.get('email')?.setValue(this.data.email);
    this.companyFormGroup.get('photo')?.setValue(this.data.logo);
   }
  }

  public submitCompany(){
    let variables;
    if(this.updateMode){
      variables= {
        id: this.data.id,
        name: this.companyFormGroup.get('name')?.value,
        email:this.companyFormGroup.get('email')?.value,
        phone:this.companyFormGroup.get('phone')?.value,
        logo:this.companyFormGroup.get('photo')?.value,
      }
    }else{
      variables= {
        name: this.companyFormGroup.get('name')?.value,
        email:this.companyFormGroup.get('email')?.value,
        phone:this.companyFormGroup.get('phone')?.value,
        logo:this.companyFormGroup.get('photo')?.value,
      }
    }
    this.apollo
    .mutate({
      mutation: this.updateMode? UPDATE_COMPANY: CREATE_COMPANY,
      variables,
    })
    .subscribe(
      ({ data }) => {
        console.log('got data', data);
        this.dialogRef.close();
      },
      error => {
        console.log('there was an error sending the query', error);
      },
    );
  }
}
