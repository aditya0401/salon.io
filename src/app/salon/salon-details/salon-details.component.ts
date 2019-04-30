import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SalonServiceService } from '../salon-service.service';

@Component({
  selector: 'app-salon-details',
  templateUrl: './salon-details.component.html',
  styleUrls: ['./salon-details.component.css']
})
export class SalonDetailsComponent implements OnInit {
salonDetails: any;
  constructor(private _route: ActivatedRoute, private router: Router, private _salonservice: SalonServiceService) { }

  ngOnInit() {
    const id = this._route.snapshot.params['id'];
    console.log(id);
    
    this.salonDetails= this._salonservice.getDetails(id);
    console.log("salonDetails", this.salonDetails);
    
  }

}
