import { Injectable } from '@angular/core';
import  * as firebase from 'firebase';
import { AppRoutingModule } from '../app-routing.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
public  tk;
  constructor() { }

  signUpUser(email:string, password:string)
  {
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .catch
    {
      (error) => console.log("error",error);
      
    };
  }
  signInUser(email:string, password:string){
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(
      response => {
        firebase.auth().currentUser.getIdToken()
        .then(
          (token)=> {
            console.log("token",token);
            
            this.tk = token;
          }
        )
      }     
    )
    .catch(
      error => console.log("error", error)
      
    )
  }

  getToken(){
    firebase.auth().currentUser.getIdToken()
        .then(
          (token)=> {
            this.tk = token;
          }
        )
        return this.tk;
  }


}
