import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalonListComponent } from './salon-list/salon-list.component';
import { SalonDetailsComponent } from './salon-details/salon-details.component';
import { SalonAddComponent } from './salon-add/salon-add.component';

const routes: Routes = [
  {
    'path': 'salon',
    'component': SalonListComponent
  },
  {
    'path': 'salon/:id',
    'component': SalonDetailsComponent
  },
  {
    'path': 'addSalon',
    'component': SalonAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalonRoutingModule { }
