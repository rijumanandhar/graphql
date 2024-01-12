import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { UserComponent } from './user.component';
import { ViewUserProfileComponent } from './view-user-profile/view-user-profile.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewUserDialogComponent } from './view-user-dialog/view-user-dialog.component';

@NgModule({
  declarations: [
    UserComponent,
    ViewUserProfileComponent,
    ViewUserDialogComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
 
})
export class UserModule { }
