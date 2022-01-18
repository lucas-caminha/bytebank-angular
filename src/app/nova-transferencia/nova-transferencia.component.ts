import { Component } from "@angular/core";

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

    public valor: number = 12;
    public destino: number = 222;

    public transferir(): void {
        console.log('Solicitado nova transferência.');
        console.log('Valor: ', this.valor);
        console.log('Destino: ', this.destino);
    }

}