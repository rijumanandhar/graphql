import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { UserComponent } from './user.component';
import { ViewUserProfileComponent } from './view-user-profile/view-user-profile.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    UserComponent,
    ViewUserProfileComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
  ],
 
})
export class UserModule { }
