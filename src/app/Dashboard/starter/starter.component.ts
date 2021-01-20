import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { User } from 'src/app/_services/user';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.css']
})
export class StarterComponent implements OnInit {
  userData :User;
  constructor(public authservice:AuthService) { 
    this.userData = JSON.parse(localStorage.getItem('user')); 
  }

  ngOnInit(): void {
  }

  SignOut(){
    this.authservice.SignOut()
    .then(res=>console.log(res));
  }

}
