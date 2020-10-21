import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import { AuthService } from 'src/app/_services/auth.service';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private _location:Location, public authService: AuthService) { }

  ngOnInit(): void {
  }

  backClicked(): void{
    this._location.back();
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}
