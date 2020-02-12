import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app.error';
import { Component, OnInit } from '@angular/core';
import {PostsService} from './posts.service'

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts :any = [];
  constructor(private postService:PostsService) { }
  

  ngOnInit() {
    this.getPostData();
  }

  getPostData(){
    this.postService.getPosts().subscribe(
      (result)=> {
        console.log(result);
        this.posts = result;
    },error =>{
      alert('Unexpected error occured');
      console.log('Unexpected error');
    });
  }

  createPost(input: HTMLInputElement){
    let post = {title: input.value};
        input.value = '';
        this.postService.createPosts(post).subscribe(
      (result) => {
        post['id'] = result;
        this.posts.splice(0,0,post);
    },error => {
      alert('Unexpected error occured');
      console.log('Unexpected error');
    });
  }

  deletePost(post){
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1);
    this.postService.deletePosts(post.id).subscribe(
      (response)=>{
        console.log('respose found',response);
          
    },(error: AppError )=>{
      console.log('Error caught',error);
      this.posts.splice(index,0,post);
      if(error instanceof NotFoundError){
        alert('Post already deleted');
        console.log('Post already deleted');
      }
      else{
        throw error;
      }
    });
  }


}
