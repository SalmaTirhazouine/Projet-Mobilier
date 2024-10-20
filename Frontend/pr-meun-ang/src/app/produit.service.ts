import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from './produit';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private baseURL ="http://localhost:2001/Produit";
  private catURL ="http://localhost:2001/Categorie";
  private adminBaseURL  ="http://localhost:2001/Admin";
 
  constructor(private httpClient :HttpClient) { }

getProduitsList(): Observable<Produit[]>{
    return this.httpClient.get<Produit[]>(`${this.baseURL}/getall`);
  }

  createProduit(Produit: Produit): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/addProduit`, Produit);
  }

  getProduitById(id: number): Observable<Produit>{
    return this.httpClient.get<Produit>(`${this.baseURL}/getProduit?id=${id}`);
  }

  updateProduit(id: number, Produit: Produit): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/updateProduit?id=${id}`, Produit);
  }

  deleteProduit(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/delete_produit?id=${id}`);
  }
authenticate(email: string, password: string): Observable<any> {
  const params = new URLSearchParams();
  params.set('email', email);
  params.set('password', password);

  return this.httpClient.post(`${this.adminBaseURL}/authenticate`, params.toString(), {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    responseType: 'text' as 'json'
  });
}
getCategories(): Observable<any[]> {
  return this.httpClient.get<any[]>(`${this.catURL}/getCategories`);
}
getProduitsParCategorie(categorie: string): Observable<Produit[]> {
  return this.httpClient.get<Produit[]>(`${this.baseURL}/parCategorie?categorie=${categorie}`);
}
}
