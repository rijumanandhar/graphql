import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
  ],
 
})
export class DashboardModule { }
