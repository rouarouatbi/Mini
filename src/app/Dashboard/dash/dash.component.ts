import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  userData :any;
  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
    this.userData = this.authservice.userData;
  }

  SignOut(){
    this.authservice.SignOut()
    .then(res=>console.log(res));
  }

}
