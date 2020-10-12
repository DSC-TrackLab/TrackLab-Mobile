import { FirebaseModule } from './_modules/firebase/firebase';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularMaterialModule } from './angular-material.module';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import {AuthService} from './_services/auth.service'

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { ForgotpasswordComponent } from './components/auth/forgotpassword/forgotpassword.component';
import { GuestsigninComponent } from './components/auth/guestsignin/guestsignin.component';
import { BackArrowComponent } from './components/buttons/back-arrow/back-arrow.component';
import { AdminComponent } from './components/admin/admin.component';
import { ResetPasswordComponent } from './components/auth/resetpassword/reset-password.component';
import { PasswordresetComponent } from './components/auth/passwordreset/passwordreset.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ForgotpasswordComponent,
    GuestsigninComponent,
    BackArrowComponent,
    AdminComponent,
    ResetPasswordComponent,
    PasswordresetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
	ReactiveFormsModule,
  FirebaseModule,
  AngularFirestoreModule
  ],
  
  providers: [AngularFirestore,AuthService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
