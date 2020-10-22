import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common'

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  //logc once you reach the driver pager
  constructor(private router:Router, private location:Location) { }

  link(route_:string) : void{
    this.router.navigate([route_])
  }
  //before you click on it
  driver(): void{
    this.router.navigate(["driver"])//used to navigates routes IVe created in the .ts file
  }
  ngOnInit(): void {
  }

}
