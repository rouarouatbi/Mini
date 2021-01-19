import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';
import { User } from 'src/app/_services/user';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  userData :User;
  userData2 : Observable<User>;
  
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
