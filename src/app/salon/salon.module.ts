import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalonRoutingModule } from './salon-routing.module';
import { SalonListComponent } from './salon-list/salon-list.component';
import { CustomMaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [SalonListComponent],
  imports: [
    CommonModule,
    SalonRoutingModule,
    CustomMaterialModule,
    FormsModule, ReactiveFormsModule,Ng2SearchPipeModule
  ]
})
export class SalonModule { }
