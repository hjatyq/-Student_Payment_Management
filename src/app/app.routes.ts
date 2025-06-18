import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {StudentsComponent} from './students/students.component';
import {PaymentsComponent} from './payments/payments.component';
import {LoadStudentsComponent} from './load-students/load-students.component';
import {LoadPaymentsComponent} from './load-payments/load-payments.component';
import {AdminComponent} from './admin/admin.component';
import {AuthGuard} from './guards/auth.guard';
import {AuthorizationGuardGuard} from './guards/authorization.guard';

export const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"admin",component:AdminComponent,canActivate:[AuthGuard],
    children:[
      {path:"home",component:HomeComponent},
      {path:"profile",component:ProfileComponent},
      {path:"dashboard",component:DashboardComponent},
      {path:"students",component:StudentsComponent},
      {path:"payments",component:PaymentsComponent},
      {path:"loadStudents",component:LoadStudentsComponent,canActivate:[AuthorizationGuardGuard],data:{roles:['ADMIN']}},
      {path:"loadPayments",component:LoadPaymentsComponent,canActivate:[AuthorizationGuardGuard],data:{roles:['ADMIN']}},
    ]},

];
