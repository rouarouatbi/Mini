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
  
  userData2 : Observable<User>;
  showFiller = false;
  typesOfShoes: string[] = ['Boots', 'Clogs'];
  
  constructor(public authservice:AuthService) { 
    
  }

  ngOnInit(): void {
    
    
  }

  SignOut(){
    this.authservice.SignOut()
    .then(res=>console.log(res));
  }

}
