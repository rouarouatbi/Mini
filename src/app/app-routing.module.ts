import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Public/home/home.component';
import { SignInComponent } from './Public/Authentifications/sign-in/sign-in.component';
import { SignUpComponent } from './Public/Authentifications/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './Public/Authentifications/forget-password/forget-password.component';
import { VerifyMailComponent } from './Public/Authentifications/verify-mail/verify-mail.component';
import { DashComponent } from './Dashboard/dash/dash.component';
import { SidebarComponent } from './utils/sidebar/sidebar.component';
import { AuthGuard } from './_services/guard/auth.guard';
const routes: Routes = [
  {
    component:HomeComponent,
    path:''
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path:'Sign-Up',
    component: SignUpComponent
  },
  {
    path:'dashboard',
    component: DashComponent,canActivate: [AuthGuard]
  },
  {
    path:'dash',
    component: SidebarComponent,
  },
  {
    path: 'forget-password',
    component : ForgetPasswordComponent
  },
  {
    path: 'verify-email-adress',
    component: VerifyMailComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
