import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Roles: any = ['Courier/Driver', 'Customer', 'Guest Recipient'];

  constructor(private router:Router, private location:Location) { }

  link() : void{
    this.router.navigate(["login"])
  }

  guest(): void{
    this.router.navigate(["guest"])
  }

backClicked() :void{
    this.location.back()
  }
  
  ngOnInit(): void {
  }

}
