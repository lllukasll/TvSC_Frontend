import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';

const userRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignUpComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [UserComponent, LoginComponent, SignUpComponent]
})
export class UserModule { }
