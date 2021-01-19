import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private AuthService : AuthService) { }

  ngOnInit(): void {
  }
  
  forget(reset:string){
    this.AuthService.ForgotPassword(reset)
    .then(res=>console.log(res))
  }

}
