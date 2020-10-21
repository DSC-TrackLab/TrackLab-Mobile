import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../angular-material.module';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { NgTickerModule } from 'ng-ticker';
import { CreateOrderComponent } from './components/create-order/create-order.component';

@NgModule({
  declarations: [
    UserComponent, 
    UserDashboardComponent, 
    CreateOrderComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    AngularMaterialModule,
    NgTickerModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
