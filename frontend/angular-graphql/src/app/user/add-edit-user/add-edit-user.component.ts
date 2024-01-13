import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../user.utils';

@Component({
  selector: 'add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrl: './add-edit-user.component.css'
})
export class AddEditUserComponent implements OnInit {
  public updateMode = false;
  public userFormGroup = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    photo: new FormControl(''),
    company: new FormControl(),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: User) { }
  
  ngOnInit(): void {
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
    if(this.updateMode){
      //update form group data
    }else{
      //post form group data
    }
  }
}
