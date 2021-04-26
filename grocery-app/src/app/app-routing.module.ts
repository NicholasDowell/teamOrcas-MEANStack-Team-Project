import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:"employee",component:EmployeeComponent},
  {path:"user",component:UserComponent},
  {path:"admin",component:AdminComponent}
  //{path:"\home",component:DashboardComponent,canActivate:[MyAuthGaurd]},
  //{path:"",redirectTo:"\login",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
