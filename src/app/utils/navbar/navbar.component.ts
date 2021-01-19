import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SignInComponent } from '../../Public/Authentifications/sign-in/sign-in.component';
import { SignUpComponent } from '../../Public/Authentifications/sign-up/sign-up.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logged : boolean = false;
  constructor(
          private service : AuthService,
          public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(localStorage);
    if (this.service.isLoggedIn == true ) this.logged=true; 
    }

  openDialog() {
    const dialogRef = this.dialog.open(SignInComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialog2(){
    const dialogRef = this.dialog.open(SignUpComponent);
    dialogRef.afterClosed().subscribe(res=>{
      console.log(`Dialog result : ${res}`);
    });
  }

  logOut(){
    this.service.SignOut();
  }
  

}
