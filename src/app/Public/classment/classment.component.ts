import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CompetitorService } from 'src/app/_services/competitor.service';
import { User } from '../../_services/user';
export interface PeriodicElement {
  username: string;
  position: number;
  score: number;
  photoURL: string;
}

const ELEMENT_DATA: any[] = [
  /*
  { position:1, username: 'Hydrogen', score: 44, photoURL: 'H'},
  { position:2, username: 'Helium', score: 23, photoURL: 'He'},
  */
];
@Component({
  selector: 'app-classment',
  templateUrl: './classment.component.html',
  styleUrls: ['./classment.component.css']
})
export class ClassmentComponent implements OnInit {
  users : Array<any>;
  constructor(private service : CompetitorService) { }

  ngOnInit(): void {
    this.service.getAllUsers().subscribe((res)=>{
      this.users = res.map(e => {
        return {
       //   uid: e.payload.doc.id,
          email : e.payload.doc.data()['email'],
          username: e.payload.doc.data()['username'],
          displayName: null,
          photoURL: e.payload.doc.data()['photoURL'],
          emailVerified: e.payload.doc.data()['emailVerified'],
          roles: e.payload.doc.data()['roles'],
          score : e.payload.doc.data()['score']
        };
      })
   
    });
   console.log("sorted",this.users.sort(this.compare)) ;
    setTimeout(() => {
      
     console.log("all users", this.users);
    }, 3500);
    
    
    
  }
  show:boolean = true;
  displayedColumns: string[] = ['position', 'username', 'score', 'photoURL'];
  dataSource = ELEMENT_DATA;
  
  valueChange(value){
    console.log(value);
  }

   compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const scoreA = a.score;
    const scoreB = b.score;
  
    let comparison = 0;
    if (scoreA < scoreB) {
      comparison = 1;
    } else if (scoreA < scoreB) {
      comparison = -1;
    }
    return comparison;
  }
  
 // singers.sort(compare);


}
