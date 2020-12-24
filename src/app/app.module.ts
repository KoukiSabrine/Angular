import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Liste1Component } from './liste1/liste1.component';
import {HttpClientModule} from '@angular/common/http';
import { ServiceListe1Service } from './service-liste1.service';
import { AjouterComponent } from './ajouter/ajouter.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    Liste1Component,
    AjouterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServiceListe1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
