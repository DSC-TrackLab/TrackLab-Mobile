import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common'
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userRole:any;
  Roles: any = ['Courier/Driver', 'Customer', 'Guest Recipient'];

  constructor(private router:Router, private location:Location,public authService:AuthService) { }

  link(route_:string) : void{
    this.router.navigate([route_])
  }

  guest(): void{
    this.router.navigate(["guest"])
  }

backClicked() :void{
    this.location.back()
  }
  
  ngOnInit(): void {
  }

  onClick(event:any):void{
    this.userRole=event.target.value;
  }
  createUser(frm){
    console.log(frm.value);
    
    this.authService.createUser(frm.value)
  }

  handleRadioClicked(role:string):void{
    if(role=='Guest Recipient'){
      this.userRole='Guest Recipient'
      this.guest()
    }
    if(role=='Customer'){
      this.userRole='Customer'
    }
  if(role=='Courier/Driver'){
    this.userRole='Courier/Driver'
  }

  }
}
