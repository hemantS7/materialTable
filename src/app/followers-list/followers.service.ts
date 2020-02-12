import { AppError } from './../common/app.error';
import { NotFoundError } from './../common/not-found-error';
import { catchError } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http'
import { throwError } from 'rxjs';
export class FollowersService{

    url: string = 'https://api.github.com/users/mosh-hamedani/followers';
    constructor(private http: HttpClient){

    }
    getFollowersList(){
        return this.http.get(this.url).pipe(catchError(error => {
            if(error.status == 404)
                return throwError(new NotFoundError(error));
            return throwError(new AppError(error));
        }));
    }
}