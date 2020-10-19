import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  //logc once you reach the driver pager
  constructor() {

   }
  driver(): void{
    this.router.navigate(["driver"])//used to navigates routes IVe created in the .ts file
  }
  ngOnInit(): void {
  }

}
