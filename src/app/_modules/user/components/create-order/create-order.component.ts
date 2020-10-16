import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  constructor(private location: Location, private fb: FormBuilder) { }

  edit: boolean = false;
  items: Array<Object> = [];
  itemForm: FormGroup;

  editItem(): void {
    this.edit = true;
  }

  addItem(): void {
    this.edit = true;
  }

  cancel(): void {
    this.edit = false;
  }

  backClicked() :void{
    this.location.back()
  }

  onSubmit(): void {
    this.items = [...this.items, this.itemForm.value];
    console.log(this.items);
    this.itemForm.patchValue({
      label: '',
      weight: '',
      width: '',
      length: '',
      height: ''
    });
    this.edit = false;
  }

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      label: '',
      weight: '',
      width: '',
      length: '',
      height: ''
    })
  }

}
