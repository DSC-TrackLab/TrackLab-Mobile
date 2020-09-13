import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  edit = false;

  constructor() { }

  ngOnInit(): void {
  }

  editField(){
    this.edit = true;
  }

  approveEdit(){
    this.edit = false;
  }

}
