import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-like',
  templateUrl: './my-like.component.html',
  styleUrls: ['./my-like.component.css']
})
export class MyLikeComponent implements OnInit {

  @Input() likesCount:number;
  @Input() isActive: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
  this.likesCount += (this.isActive)? -1 : 1;
  this.isActive = !this.isActive;
  }

}
