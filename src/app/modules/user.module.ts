import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/auth/login/login.component';
import { SignUpComponent } from '../components/auth/sing-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../store/effects/auth.effects';

const userRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignUpComponent}
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    EffectsModule.forFeature([AuthEffects]),
    RouterModule.forChild(userRoutes)
  ],
  declarations: [LoginComponent, SignUpComponent]
})
export class UserModule { }
