import { Component, EventEmitter, Output } from "@angular/core";
// import { Router } from "@angular/router";
// import { Transferencia } from "../models/transferencia.model";
// import { TransferenciaService } from "../services/transferencia.service";

@Component({
    selector:'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransgerenciaComponent {
    @Output() aoTransferir = new EventEmitter<any>();

    valor: number;
    destino: number;


    transferir() {
      console.log('Solicitada nova transferĂȘncia');
      const valorEmitir = { valor: this.valor, destino: this.destino };
      this.aoTransferir.emit(valorEmitir);

      this.limparCampos();
    }

    limparCampos(){
      this.valor = 0;
      this.destino = 0;
    }



    // constructor(
    //     private transferenciaService: TransferenciaService,
    //     private router: Router
    // ) {}

    // novaTransferencia() {

    //     const novaTransferencia: Transferencia = {
    //         valor: this.valor,
    //         destino: this.destino
    //     }
    //     this.transferenciaService.adicionar(novaTransferencia).subscribe((resultado) => {
    //         console.log(resultado);
    //         this.router.navigateByUrl('extrato');
    //     },
    //     error => console.log(error));
    // }
}
