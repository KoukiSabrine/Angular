import { Component, OnInit } from '@angular/core';
import { ServiceListe1Service } from '../service-liste1.service';

@Component({
  selector: 'app-liste1',
  templateUrl: './liste1.component.html',
  styleUrls: ['./liste1.component.css']
})
export class Liste1Component implements OnInit {
  prods :any=[];
  constructor(private serv:ServiceListe1Service) {
    
   }

  ngOnInit(): void {
    this.serv.getAllProduit().subscribe(
      data =>{
        this.prods=data ;
      },
      err =>{
        console.log(err);
      }
      )
  }

}
