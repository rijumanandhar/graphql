import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { CompanyComponent } from './company.component';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
  ],
 
})
export class CompanyModule { }
