import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SignInComponent } from '../../Public/Authentifications/sign-in/sign-in.component';
import { SignUpComponent } from '../../Public/Authentifications/sign-up/sign-up.component';
import { ProfileComponent } from '../../Public/profile/profile.component';
import { ContactComponent } from '../../Public/contact/contact.component';
import { User } from 'src/app/_services/user';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logged : boolean = false;
  testUser : any;
  constructor(
          private service : AuthService,
          public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(localStorage);
    if (this.service.isLoggedIn == true ) this.logged=true; 
    this.service.getUserById("wda6gHVxBJVT2sGGqwSQrnoMYAu2").then((res)=> {
      if (res.exists) {
        console.log("doc.data()==",res.data());
        this.testUser=res.data();
      } else {
        console.log("There is no document!");
      }
    }).catch(function (error) {
      console.log("There was an error getting your document:", error);
    });
    setTimeout(() => {
      console.log("hhhh",this.testUser);
    }, 3500);
  

    
    
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
  openDialog_Profile(){
    const dialogRef = this.dialog.open(ProfileComponent);
    dialogRef.afterClosed().subscribe(res=>{
      console.log(`Dialog profile result : ${res}`);
    });
  }
  openDialog_Contact(){
    const dialogRef = this.dialog.open(ContactComponent);
    dialogRef.afterClosed().subscribe(res=>{
      console.log(`Dialog contact result : ${res}`);
    });
  }

  logOut(){
    this.service.SignOut();
    location.reload();
  }
  

}
