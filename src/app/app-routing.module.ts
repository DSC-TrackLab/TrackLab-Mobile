import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ForgotpasswordComponent } from './components/auth/forgotpassword/forgotpassword.component';
import { GuestsigninComponent } from './components/auth/guestsignin/guestsignin.component';
import { DriverComponent } from './components/auth/driver/driver.component';
//router
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'register' },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component:RegisterComponent  },
  { path: 'guest', component:GuestsigninComponent },
  { path:'driver', component: DriverComponent },
  { path: 'user', loadChildren: () => import('./_modules/user/user.module').then(m => m.UserModule) },
  { path: 'admin', loadChildren: () => import('./_modules/admin/admin.module').then(m => m.AdminModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //creates object behind the scenes
  exports: [RouterModule]
})
export class AppRoutingModule { }
