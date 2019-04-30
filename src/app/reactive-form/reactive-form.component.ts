import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }
  genders = [{name: 'Male', value: 'male'},{name: 'Female', value: 'female'}];
  
  feedbackForm = new FormGroup({
    name: new FormControl('Aditya kHare '),
    message: new FormControl('Text Message'),
    gender: new FormControl('male')
  }    
  );
  
  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.feedbackForm.value);
  }
  updateValue(newVal,newMsg,gender){
    this.feedbackForm.setValue({name:newVal,message:newMsg,gender:'female'});
  }
  partialUpdateValue(newVal,newMsg,gender){
    this.feedbackForm.patchValue({name:'Nancy',gender:'female'});
  }

}
