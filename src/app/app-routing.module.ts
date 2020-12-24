import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterComponent } from './ajouter/ajouter.component';
import { Liste1Component } from './liste1/liste1.component';


const routes: Routes = [
  {path: '' ,component:Liste1Component},
  {path: 'ajouter' ,component:AjouterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
