import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


 
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
 
  formUp :FormGroup;
  email : any;
  getErrorMessage() {
    if (this.formUp.hasError('required')) {
      return 'You must enter a value';
    }

    return this.formUp.hasError('email') ? 'Not a valid email' : '';
  }

  constructor(private AuthService : AuthService,
              private fb : FormBuilder) { }

  ngOnInit(): void {
    this.formUp = this.fb.group({
      email : new FormControl('', [Validators.required, Validators.email])
    })
  }

  SignUp(mail:string, password : string, username : string){
    this.AuthService.SignUp(mail,password, username)
    .then(res=>{
      console.log(res);
    })
  }
  
  googleAuth(){
    this.AuthService.GoogleAuth()
    .then(res=>console.log(res));
  }
}
