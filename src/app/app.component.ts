import { Component, OnInit } from '@angular/core';
import  * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LP';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyABwBK4K-1ezfCmKtvlB1fcrOCFTANkVGM",
    authDomain: "salon-8692a.firebaseapp.com"
    });
  }
}
