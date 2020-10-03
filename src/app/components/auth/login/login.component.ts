import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router :Router, private location:Location,public authService:AuthService) {}

  username:string;
  password:string;


  ngOnInit(): void {
  }
  link(route_:string) : void{
    this.router.navigate([route_])
  }
  // login() : void {
  //   if(this.username == 'admin' && this.password == 'admin'){
  //    this.router.navigate(["user"]);
  //   }else {
  //     alert("Invalid credentials");
  //   }
  // }

  backClicked() :void{
    this.location.back()
  }

  login(frm):void {
    this.authService.login(frm.value.email, frm.value.password);
  }
 }

