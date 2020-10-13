import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  backClicked() :void{
    this.location.back()
  }

}
