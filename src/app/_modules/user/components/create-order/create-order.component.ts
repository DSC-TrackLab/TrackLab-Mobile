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

  add: boolean = false;
  edit: boolean = false;
  editIndex: number;
  items: Array<Object> = [];
  itemForm: FormGroup;
  initialForm = {
    label: '',
    weight: '',
    width: '',
    length: '',
    height: ''
  };

  editItem(itemIndex: number): void {
    const match = this.items.filter((item,index) => index === itemIndex);
    this.editIndex = itemIndex;
    this.itemForm.patchValue(match[0]);
    this.edit = true;
  }

  addItem(): void {
    this.add = true;
  }

  cancel(): void {
    this.itemForm.patchValue(this.initialForm);
    this.add = false;
    this.edit = false;
  }

  backClicked() :void{
    this.location.back()
  }

  onSubmit(): void {
    if(this.add){
      this.items = [...this.items, this.itemForm.value];
      this.itemForm.patchValue(this.initialForm);
      this.add = false;
    }
    this.items[this.editIndex] = this.itemForm.value;
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
