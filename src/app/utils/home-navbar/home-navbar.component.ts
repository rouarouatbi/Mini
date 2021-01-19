import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { from } from 'rxjs';
import { SignInComponent } from '../../Public/Authentifications/sign-in/sign-in.component';
import {SignUpComponent} from '../../Public/Authentifications/sign-up/sign-up.component';
@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.css']
})
export class HomeNavbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
    openDialog() {
      const dialogRef = this.dialog.open(SignInComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

    openDialog2() {
      const dialogRef = this.dialog.open(SignUpComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  

  ngOnInit(): void {
  }

}
