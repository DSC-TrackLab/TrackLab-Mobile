import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.component.html',
  styleUrls: ['./passwordreset.component.css']
})

export class PasswordresetComponent implements OnInit {
  code:any
  mode:any

  constructor(public authService:AuthService ,private location:Location,private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.mode = this.activatedRoute.snapshot.queryParams['mode'];
    this.code = this.activatedRoute.snapshot.queryParams['oobCode'];
  }
backClicked():void{

}
  resetPasswordRequest(frm){
  
    this.authService.HandleResetPassword(frm.value.password,this.code)
  }
}
