import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  edit = false;
  
  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  
  backClicked() :void{
    this.location.back()
  }

}
