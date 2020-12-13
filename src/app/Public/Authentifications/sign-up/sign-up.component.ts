import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private AuthService : AuthService) { }

  ngOnInit(): void {
  }

  SignUp(mail:string, password : string){
    this.AuthService.SignUp(mail,password)
    .then(res=>{
      console.log(res);
    })
  }
  googleAuth(){
    this.AuthService.GoogleAuth()
    .then(res=>console.log(res));
  }
}
