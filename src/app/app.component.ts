import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Gabebank';
  transferencias: any[] = [];

  constructor(private service: TransferenciaService) {}

  transferir($event) {
    this.service.adicionar($event);
  }
}
