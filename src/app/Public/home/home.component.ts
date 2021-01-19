import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { HomeNavbarComponent } from '../../utils/home-navbar/home-navbar.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  breakpoint:number;
  constructor() { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 2;
  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 2;
  }
}
