import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Location} from '@angular/common'

@Component({
  selector: 'app-back-arrow',
  templateUrl: './back-arrow.component.html',
  styleUrls: ['./back-arrow.component.css']
})
export class BackArrowComponent implements OnInit {

  constructor(private location:Location) { }

  @Output() click=new EventEmitter();

  
  ngOnInit(): void {
  }

}
