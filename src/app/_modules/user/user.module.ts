import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../../angular-material.module';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { NgTickerModule } from 'ng-ticker';

@NgModule({
  declarations: [
    UserComponent, 
    UserDashboardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    AngularMaterialModule,
    NgTickerModule
  ]
})
export class UserModule { }
