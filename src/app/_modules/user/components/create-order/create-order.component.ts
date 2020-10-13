import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  constructor(private location: Location) { }

  itemsNo: number = 1;
  edit = false;
  emptyArray = new Array(this.itemsNo);

  counter(i: number) {
    this.emptyArray = new Array(i);
    return this.emptyArray;
  }

  newItem(): void {
    this.itemsNo += 1;
    this.counter(this.itemsNo);
  }

  editItem(): void {
    this.edit = true;
  }

  addItem(): void {
    this.edit = false;
  }

  cancel(): void {
    this.edit = false;
  }

  save(): void {
    //save to DB
  }

  backClicked() :void{
    this.location.back()
  }

  ngOnInit(): void {
  }

}
