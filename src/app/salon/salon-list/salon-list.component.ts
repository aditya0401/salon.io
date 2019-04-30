import { Component, OnInit } from '@angular/core';
import { SalonServiceService } from '../salon-service.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-salon-list',
  templateUrl: './salon-list.component.html',
  styleUrls: ['./salon-list.component.css']
})
export class SalonListComponent implements OnInit {
  salonList;
  searchString:string= "";
  constructor( private _salonService: SalonServiceService, private _authservice: AuthService) { }

  ngOnInit() {
    this._salonService.getSalonList().subscribe(
      (data)=>{
        this.salonList = data;
        console.log("list",this.salonList);
        }
    );
    
    
  }

}
