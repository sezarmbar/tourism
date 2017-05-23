import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { TourPlaningComponent } from './tour-planing/tour-planing.component';
import { SettingsComponent } from './settings/settings.component';
const routes: Routes = [
  // {
  //   path: '',
  //   children: []
  // },
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'map',component:MapComponent},
  {path:'tourplan',component:TourPlaningComponent},
  {path:'settings',component:SettingsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
