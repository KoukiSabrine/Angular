import { Component, OnInit } from '@angular/core';
import { ServiceListe1Service } from '../service-liste1.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
prod: any = {"id":null,"description":"","Quantite":0,"prix":0}
  constructor(private serv: ServiceListe1Service) { }

  ngOnInit(): void {
  }
  Ajouter(){
    this.serv.ajouterProduit(this.prod).subscribe(
   data=>{
     console.log(data);
   },
   err=>{
     console.log(err);
   }
    )
  }

}
