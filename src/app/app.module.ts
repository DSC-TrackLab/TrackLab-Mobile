import { FirebaseModule } from './_modules/firebase/firebase';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularMaterialModule } from './angular-material.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { ForgotpasswordComponent } from './components/auth/forgotpassword/forgotpassword.component';
import { GuestsigninComponent } from './components/auth/guestsignin/guestsignin.component';
import { BackArrowComponent } from './components/buttons/back-arrow/back-arrow.component';
import { DriverComponent } from './components/auth/driver/driver.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ForgotpasswordComponent,
    GuestsigninComponent,
    BackArrowComponent,
    DriverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
	ReactiveFormsModule,
	FirebaseModule
  ],
  
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
