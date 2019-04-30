import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SalonServiceService } from '../salon-service.service';

@Component({
  selector: 'app-salon-add',
  templateUrl: './salon-add.component.html',
  styleUrls: ['./salon-add.component.css']
})
export class SalonAddComponent implements OnInit {
model = {
  'name': "Aditya"
};
  constructor( private _salonService: SalonServiceService ) { }

  ngOnInit() {
  }

  addSalon(form: NgForm){
    const objPost = {
      'name': form.value.name
    }
    this._salonService.saveSalon(objPost).subscribe(
      (salon)=>{
        console.log("salon",salon);
        
      }
    )
  }

}
