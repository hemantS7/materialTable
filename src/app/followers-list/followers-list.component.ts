import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app.error';
import { FollowersService } from './followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'followers-list',
  templateUrl: './followers-list.component.html',
  styleUrls: ['./followers-list.component.css']
})
export class FollowersListComponent implements OnInit {

  constructor(private followerService: FollowersService) { }

  followersList: any = [];

  ngOnInit() {
    this.getFollowersInfo();
  }

  getFollowersInfo(){
    this.followerService.getFollowersList().subscribe(followersInfo => {
      this.followersList = followersInfo;
      console.log(this.followersList);
    },(error: AppError)=>{
      console.log(error);
      if(error instanceof NotFoundError){
        alert('Followers info not found');
      }
      else{
        throw error;
      }
    });
  }

}
