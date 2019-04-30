import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-fb-form',
  templateUrl: './fb-form.component.html',
  styleUrls: ['./fb-form.component.css']
})
export class FbFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  // FormBuilder service has three methods: control(), group(), and array() 

  genders = [{name: 'Male', value: 'male'},{name: 'Female', value: 'female'}];
  
  feedbackForm = this.fb.group({
    name: ['Aditya Khare',Validators.required],
    message: ['form builder message'],
    gender: ['male']
  }    
  );
  
  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.feedbackForm.value);
  }
  updateValue(newVal,newMsg){
    this.feedbackForm.setValue({name:newVal,message:newMsg,gender:'female'});
  }
  partialUpdateValue(){
    this.feedbackForm.patchValue({name:'Nancy',gender:'female'});
  }

}
