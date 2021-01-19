import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';


@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit, OnDestroy{

  private subscription: Subscription;

  constructor() { }

 
  files: any = [];

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
    }  
  }
  deleteAttachment(index) {
    this.files.splice(index, 1)
  }
  ngOnInit() {
    this.subscription = interval(1000)
        .subscribe(x => { this.uploadFile; this.deleteAttachment;});
        
 }

ngOnDestroy() {
   this.subscription.unsubscribe();
}
  

}
