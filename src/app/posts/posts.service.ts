import { AppError } from './../common/app.error';
import { NotFoundError } from './../common/not-found-error';
import { HttpClient } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
export class PostsService{
    url: string = 'http://jsonplaceholder.typicode.com/posts';
    constructor(private http: HttpClient){

    }

    getPosts(){
        return this.http.get(this.url);
    }
    createPosts(post){
        return this.http.post(this.url,post);
    }
    deletePosts(id){
        //return throwError(new AppError());
       return this.http.delete(this.url + '/' +id).pipe(catchError(error =>{
         if(error.status == 404)
         return throwError(new NotFoundError(error));

         return throwError(new AppError(error));
       }));
    }
}