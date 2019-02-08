import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddcityComponent } from './addcity/addcity.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'addcity', component:AddcityComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
