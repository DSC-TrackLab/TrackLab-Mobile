import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user:firebase.User
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUserState().subscribe(user=>this.user=user)
  }

}
