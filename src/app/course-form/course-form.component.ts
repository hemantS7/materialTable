import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  courseFormData: any = {courseName:"",categoryId:0, categoryList:[{id:1,value:"Item1"},{id:2,value:"Item2"}]};
  
  constructor() { }

  ngOnInit() {
  }

  logData(data){
    console.log(data);
  }

}
