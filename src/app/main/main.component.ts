import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  
  topics = [
    {'path': 'templateF',
     'name': 'Template form'
    },
    {'path': 'reactiveF',
     'name': 'Reactive form'
    },
    {
      'path': 'formBuilderF',
      'name': 'Form Builder Reactive Form'
    },
    {
      'path': 'salon',
      'name': 'Salons List'
    }
  ]
  ngOnInit() {
  }

}
