import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AngularMaterialModule } from '../angular-material.module';
import { DriverProfileComponent } from './driver-profile/driver-profile.component';



@NgModule({
  declarations: [UserProfileComponent, DriverProfileComponent],
  exports: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class UserModule { }
