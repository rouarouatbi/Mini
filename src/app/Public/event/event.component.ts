import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from '../Authentifications/sign-in/sign-in.component';
import { OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { SubmitComponent } from '../submit/submit.component';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  public dateNow = new Date();
  public dDay = new Date('Jan 13 2021 00:00:00');
  public deadline = new Date('Jan 27 2021 00:00:00');
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;

  public title;
  public timeDifference;
  public secondsToDday;
  public minutesToDday;
  public hoursToDday;
  public daysToDday;
  public secondsToDday2;
  public minutesToDday2;
  public hoursToDday2;
  public daysToDday2;
  public visible=false;
  public submit=false;
  public description;
  public deadlineISO : string;


  private getTimeDifference () {
      this.timeDifference = this.dDay.getTime() - new  Date().getTime();
      if (this.timeDifference>0){
      this.visible= true;
      this.allocateTimeUnits(this.timeDifference);}   
  }
  private getDeadline(){
    this.timeDifference = this.deadline.getTime() - new  Date().getTime();
      this.allocateTimeUnits2(this.timeDifference);
    this.deadlineISO= this.deadline.toISOString();

  }

private allocateTimeUnits (timeDifference) {
      this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
      this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
      this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
      this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
}
private allocateTimeUnits2 (timeDifference) {
  this.secondsToDday2 = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
  this.minutesToDday2 = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
  this.hoursToDday2 = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
  this.daysToDday2 = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
}
constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(SubmitComponent);
  }

  ngOnInit() {
     this.subscription = interval(1000)
         .subscribe(x => { this.getTimeDifference(); this.getDeadline();});
         
  }

 ngOnDestroy() {
    this.subscription.unsubscribe();
 }

}