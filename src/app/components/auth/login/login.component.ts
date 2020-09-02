import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router :Router, private location:Location) { }

  username:string;
  password:string;


  ngOnInit(): void {
  }
  link() : void{
    this.router.navigate(["user"])
  }
  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["user"]);
    }else {
      alert("Invalid credentials");
    }
  }

  backClicked() :void{
    this.location.back()
  }
 }

