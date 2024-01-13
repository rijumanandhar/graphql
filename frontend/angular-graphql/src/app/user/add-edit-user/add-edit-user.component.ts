import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../user.utils';
import { Apollo } from 'apollo-angular';
import { CREATE_USER, GET_COMPANY_NAME_ID, UPDATE_USER } from '../../graphql.operations';

@Component({
  selector: 'add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrl: './add-edit-user.component.css'
})
export class AddEditUserComponent implements OnInit {
  public updateMode = false;
  public companyNameIds : {
    id: number,
    name: string,
  }[];
  public userFormGroup = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    photo: new FormControl(''),
    company: new FormControl(),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User, 
    private apollo: Apollo,
    public dialogRef: MatDialogRef<AddEditUserComponent>,
  ) { }
  
  ngOnInit(): void {
    this.apollo.watchQuery({
      query: GET_COMPANY_NAME_ID
    }).valueChanges.subscribe(({ data, error}: any ) => {
      this.companyNameIds = data.getAllCompany;
      console.log(this.companyNameIds)
    })

   if(this.data){
    this.updateMode = true;
    this.userFormGroup.get('fullname')?.setValue(this.data.fullname);
    this.userFormGroup.get('username')?.setValue(this.data.username);
    this.userFormGroup.get('phone')?.setValue(this.data.photo);
    this.userFormGroup.get('email')?.setValue(this.data.email);
    this.userFormGroup.get('photo')?.setValue(this.data.photo);
    this.userFormGroup.get('company')?.setValue(this.data.companyId);
   }
  }

  public submitUser(){
    let variables;
    if(this.updateMode){
      variables= {
        id: this.data.id,
        username:this.userFormGroup.get('username')?.value,
        name: this.userFormGroup.get('fullname')?.value,
        email:this.userFormGroup.get('email')?.value,
        phone:this.userFormGroup.get('phone')?.value,
        photo:this.userFormGroup.get('photo')?.value,
        companyId: parseInt(this.userFormGroup.get('company')?.value),
      }
    }else{
      variables= {
        username:this.userFormGroup.get('username')?.value,
        name: this.userFormGroup.get('fullname')?.value,
        email:this.userFormGroup.get('email')?.value,
        phone:this.userFormGroup.get('phone')?.value,
        photo:this.userFormGroup.get('photo')?.value,
        companyId: parseInt(this.userFormGroup.get('company')?.value),
      }
    }
    this.apollo
    .mutate({
      mutation: this.updateMode? UPDATE_USER: CREATE_USER,
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
