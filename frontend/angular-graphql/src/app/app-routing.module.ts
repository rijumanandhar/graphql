import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component'
import { UserComponent } from './user/user.component'
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
  { path: '', redirectTo: 'company', pathMatch: 'full' },
  {path: 'company' , component: CompanyComponent},
  {path: 'user' , component: UserComponent},
  {path: 'dashboard' , component: DashboardComponent},
  { path: '**', component: CompanyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
