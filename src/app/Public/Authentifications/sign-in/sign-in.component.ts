import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authS : AuthService) { }

  ngOnInit(): void {
  }
  SignIn(adress: string , password : string){
    this.authS.SignIn(adress, password)
    .then(res=>console.log(res));
  }

  GoogleAuth(){
    this.authS.GoogleAuth()
    .then(res=>console.log(res));
  }

}
