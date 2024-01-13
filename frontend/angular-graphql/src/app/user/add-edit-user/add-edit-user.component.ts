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
  public companyFormGroup = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    photo: new FormControl(''),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: User) { }
  
  ngOnInit(): void {
   if(this.data){
    this.updateMode = true;
    // this.companyFormGroup.get('name')?.setValue(this.data.companyName);
    // this.companyFormGroup.get('phone')?.setValue(this.data.phoneNumber);
    // this.companyFormGroup.get('email')?.setValue(this.data.email);
    // this.companyFormGroup.get('photo')?.setValue(this.data.companyLogo);
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
