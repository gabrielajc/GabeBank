import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  adicionar(transferencia: any) {
    this.hidratar(transferencia);

    this.listaTransferencia.push(transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }

  // todas(): Observable<Transferencia[]> {
  //   return this.httpClient.get<Transferencia[]>(this.url);
  // }

  // adicionar(transferencia: Transferencia): Observable<Transferencia> {
  //   this.hidratar(transferencia);
  //   return this.httpClient.post<Transferencia>(this.url, transferencia);
  // }

  // private hidratar(transferencia: any) {
  //   transferencia.data = new Date();
  // }
}
