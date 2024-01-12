import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Company } from '../company.utils';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor(@Inject(MAT_DIALOG_DATA) public data: Company) { }
  
  ngOnInit(): void {
   if(this.data){
    this.updateMode = true;
    this.companyFormGroup.get('name')?.setValue(this.data.companyName);
    this.companyFormGroup.get('phone')?.setValue(this.data.phoneNumber);
    this.companyFormGroup.get('email')?.setValue(this.data.email);
    this.companyFormGroup.get('photo')?.setValue(this.data.companyLogo);
   }
  }

  public submitCompany(){
    if(this.updateMode){
      //update form group data
    }else{
      //post form group data
    }
  }
}
