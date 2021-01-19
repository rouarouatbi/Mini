import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/_services/auth.service';
import { SignInComponent } from '../Authentifications/sign-in/sign-in.component';
import { SignUpComponent } from '../Authentifications/sign-up/sign-up.component';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(public dialog: MatDialog,
              public service : AuthService) { }

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

  ngOnInit(): void {
  }
 
}
