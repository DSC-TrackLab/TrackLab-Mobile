import { CreateOrderComponent } from './components/create-order/create-order.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: '', component: UserDashboardComponent},
  { path: 'profile', component: UserComponent },
  { path: 'create-order', component: CreateOrderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
