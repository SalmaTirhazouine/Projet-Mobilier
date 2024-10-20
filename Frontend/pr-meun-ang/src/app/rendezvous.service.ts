import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RendezVous } from './rendezvous';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {
  private rendezURL = "http://localhost:2001/rendezvous";


  constructor(private httpClient: HttpClient) { }

  createRendezVous(rendezVous: RendezVous): Observable<Object> {
    return this.httpClient.post(`${this.rendezURL}/createRendezVous`, rendezVous);
  }
  
  delete_RendezVous(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.rendezURL}/deleteRendezVous?id=${id}`);
  }
  
  getallRendezVous(): Observable<RendezVous[]> {
    return this.httpClient.get<RendezVous[]>(`${this.rendezURL}/getallRendezVous`);
  }
  
  getRendezVousById(id: number): Observable<RendezVous> {
    return this.httpClient.get<RendezVous>(`${this.rendezURL}/getRendezVousById?id=${id}`);
  }

  updateValidation(rendezVous: RendezVous): Observable<RendezVous> {
    return this.httpClient.post<RendezVous>(`${this.rendezURL}/updateValidation`, rendezVous);
  }
  
}
