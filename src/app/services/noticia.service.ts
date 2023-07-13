import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoticiaService {
  constructor(private httpCliente: HttpClient) {}

  getNoticias(parametros: any): Observable<any> {
    const url =
      'https://newsapi.org/v2/top-headlines?country=' +
      parametros.pais +
      '&category=' +
      parametros.categoria +
      '&apiKey=1f402f6f1fb6482b8c867980343c4b21';

    return this.httpCliente.get(url);
  }
}
