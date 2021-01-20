import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { CompetitorService } from 'src/app/_services/competitor.service';
import { User } from 'src/app/_services/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any;
  user2 : any;
  photoUrl: string ;
  constructor(private auth : AuthService,
              private service : CompetitorService) { }

  ngOnInit(): void {
    
    this.affectation().then((res)=>{
      console.log("user2", this.user2);
    });
    

  }

  async affectation(){
    await  this.localStorageAffectation();
    console.log("user1", this.user);
    return this.auth.getUserById(this.user.uid).then((res)=>{
      this.user2 = res.data();
    });
    };
    
  
  localStorageAffectation(){
    return this.user = JSON.parse(localStorage.getItem('user'));
  }

}
