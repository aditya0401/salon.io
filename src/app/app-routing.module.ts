import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { FbFormComponent } from './fb-form/fb-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SalonModule } from './salon/salon.module';
import { MainComponent } from './main/main.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

const routes: Routes = [  
  { path: 'home', component: MainComponent},
  { path: 'templateF', component: TemplateFormComponent },
  { path: 'reactiveF', component: ReactiveFormComponent },
  { path: 'formBuilderF', component: FbFormComponent },
  { path: 'salon', loadChildren:'./salon/salon.module#SalonModule'},
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),SalonModule],
  exports: [RouterModule,SalonModule]
})
export class AppRoutingModule { }
