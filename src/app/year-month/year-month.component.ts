import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'year-month',
    templateUrl: 'year-month.component.html',
})
export class YearMonthComponent implements OnInit{
    year: number;
    month: number;
    
    constructor(private route: ActivatedRoute){
    }
    
    ngOnInit(){
      this.year = +this.route.snapshot.paramMap.get('year');
      this.month = +this.route.snapshot.paramMap.get('month');
    }
}