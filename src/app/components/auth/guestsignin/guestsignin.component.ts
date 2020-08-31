import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'

@Component({
  selector: 'app-guestsignin',
  templateUrl: './guestsignin.component.html',
  styleUrls: ['./guestsignin.component.css']
})
export class GuestsigninComponent implements OnInit {

  constructor(private location:Location) { }

  backClicked(): void{
    this.location.back();
  }

  ngOnInit(): void {
  }

}
