import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-verify-mail',
  templateUrl: './verify-mail.component.html',
  styleUrls: ['./verify-mail.component.css']
})
export class VerifyMailComponent implements OnInit {
  userData: any;
  constructor(private AuthService : AuthService) { }

  ngOnInit(): void {
    this.userData = this.AuthService.userData;
  }

  SendVerification(){
    this.AuthService.SendVerificationMail().
    then(res=>console.log(res))
  }

}
