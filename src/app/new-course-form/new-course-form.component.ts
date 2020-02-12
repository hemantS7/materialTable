import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent{

courseForm = new FormGroup({
  topics : new FormArray([])
});

get topics(){
  return this.courseForm.get('topics') as FormArray;
}



addTopics(topic: HTMLInputElement){
  this.topics.push(new FormControl(topic.value))
}

removeTopic(topic: FormControl){
  let index = this.topics.controls.indexOf(topic);
  this.topics.removeAt(index);
}


}
