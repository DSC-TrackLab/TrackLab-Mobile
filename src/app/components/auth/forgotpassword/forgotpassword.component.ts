import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Location} from '@angular/common';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private _location:Location) { }

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
