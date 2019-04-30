import { Component, OnInit } from '@angular/core';
import { FeedbackModel} from '../feedback';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  genders = [{name: 'Male', value: 'male'},{name: 'Female', value: 'female'}];
  constructor() { }
  model = new FeedbackModel('Aditya','test message','male');
  ngOnInit() {
  }

  customCompare(o1, o2) {
		return o1 && o2 ? o1.value === o2.value : o1 === o2;
	}

}
