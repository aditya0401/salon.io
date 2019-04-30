import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SalonServiceService {
salonDetail= [];
  constructor(private http: HttpClient, private _authservice: AuthService) { }

  salonListArray = [
    {
      id: 1,
      name: 'ABC salon',
      address: 'address 1',
      owner: 'Aditya khare',
      contact: '1233456',
      type: 'Salon',
      bestprovider: 'Beard' 
    },
    {
      id: 2,
      name: 'New salon',
      address: 'address 2',
      owner: 'Ayu',
      contact: '1233456',
      type: 'SPA and Salon',
      bestprovider: 'SPA' 
    },
    {
      id: 3,
      name: 'City salon',
      address: 'address 2',
      owner: 'Anurag',
      contact: '78479458',
      type: 'Salon',
      bestprovider: 'Haircut' 
    }
  ];


  getSalonList(){
    //to enable when on open netwrk
    //const token= this._authservice.getToken();
    //console.log("token",token);
    //return this.http.get("https://salon-8692a.firebaseio.com/salon.json?auth="+token);
  return this.http.get('./assets/salonList.json');
  }
  getDetails(id){
    const token= this._authservice.getToken();
    this.http.get("https://salon-8692a.firebaseio.com/salon.json?auth="+token+"&id="+id).subscribe(
      (data)=>{
        console.log("data",data);
        console.log("type of ddata",typeof(data));
        console.log("type of salonlistaray",typeof(this.salonListArray));
        
        console.log("this.salonListArray",this.salonListArray);
        
      })
    console.log("service id",id)
    let newObj= this.salonListArray.find(obj => obj.id == id);
    return newObj;
    
  }
  saveSalon(salon){
    let result= this.http.put("https://salon-8692a.firebaseio.com/salonNew.json",this.salonListArray);
  console.log("result",result);
  return result;  
  }
}
