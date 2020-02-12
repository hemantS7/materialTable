import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'rout-nav-demo',
  templateUrl: './rout-nav-demo.component.html',
  styleUrls: ['./rout-nav-demo.component.css']
})
export class RoutNavDemoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToFirstMonth(){
      this.router.navigate(['/yearMonth',2020,1]);
  }

  navigateToSecondMonth(){
    this.router.navigate(['/yearMonth',2020,2]);
  }

  navigateToThirdMonth(){
    this.router.navigate(['/yearMonth',2020,3]);  
  }
}
