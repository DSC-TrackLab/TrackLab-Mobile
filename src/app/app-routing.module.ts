import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ForgotpasswordComponent } from './components/auth/forgotpassword/forgotpassword.component';
import { GuestsigninComponent } from './components/auth/guestsignin/guestsignin.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'register' },
  { path: 'user', component: ForgotpasswordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component:RegisterComponent  },
  { path: 'guest', component:GuestsigninComponent },
  { path: 'profile', component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
