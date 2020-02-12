import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-follower-profile',
  templateUrl: './follower-profile.component.html',
  styleUrls: ['./follower-profile.component.css']
})
export class FollowerProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params => {
      let id = +params.get('id');
      console.log(id);
    });
  }

}
