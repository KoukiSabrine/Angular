import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceListe1Service {

  constructor(private http:HttpClient) { }

  getAllProduit(){
    return this.http.get('http://127.0.0.1:8080/produits');
  }
  ajouterProduit(prod:any){
    return this.http.post("http://127.0.0.1:8080/addProduit",prod);
  }
}
