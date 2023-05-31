import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private appUrl: string = 'http://localhost:3000/';

  // Injeção de dependências
  constructor(private http: HttpClient) { }

  // recuperar nossos clientes:
  getClientes(): Observable<any> {
    return this.http.get(`${this.appUrl}clientes`);
  }

}
