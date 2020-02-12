import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FollowersService } from './followers-list/followers.service';
import { AppErrorHandler } from './common/app-error-handler';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableComponent } from './mat-table/mat-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MyLikeComponent } from './my-like/my-like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { CourseFormComponent } from './course-form/course-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PostsComponent } from './posts/posts.component';
import {PostsService} from './posts/posts.service';
import { FollowersListComponent } from './followers-list/followers-list.component';
import {RouterModule} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { FollowerProfileComponent } from './follower-profile/follower-profile.component';
import { RoutNavDemoComponent } from './rout-nav-demo/rout-nav-demo.component';
import {YearMonthComponent} from './year-month/year-month.component';

@NgModule({
  declarations: [
    AppComponent,
    MatTableComponent,
    MyLikeComponent,
    ZippyComponent,
    CourseFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    ResetPasswordComponent,
    PostsComponent,
    FollowersListComponent,
    NotFoundComponent,
    HomeComponent,
    NavBarComponent,
    FollowerProfileComponent,
    RoutNavDemoComponent,
    YearMonthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '',component: RoutNavDemoComponent},
      {path: 'posts',component: PostsComponent},
      {path: 'followers/:id',component: FollowerProfileComponent},
      {path: 'followers', component: FollowersListComponent},
      {path: 'yearMonth/:year/:month', component:YearMonthComponent},
      {path: '**',component: NotFoundComponent},
    ])
  ],
  providers: [PostsService,
    FollowersService,
  {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
