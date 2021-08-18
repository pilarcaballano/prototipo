import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MandoService } from 'src/app/core/mando.service';
import { Listado } from 'src/app/model/mando/Listado';

@Component({
  selector: 'cuadro-listado-azulejos',
  templateUrl: './listado-azulejos.component.html',
  styleUrls: ['./listado-azulejos.component.scss']
})
export class ListadoAzulejosComponent implements OnInit {

  public listaAzulejosOS: any[] = [
    { title: "OS Generadas", estadoID: 0 },
    { title: "OS Iniciadas", estadoID: 1 },
    { title: "OS Pdte. Distribución", estadoID: 5 },
    { title: "OS Finalizadas", estadoID: 2 }
  ]

  public listaAzulejosActas: any[] = [
    { title: "Actas Pdte. Firmar", estadoID: 0 },
    { title: "Actas Pdte. Envio PF.", estadoID: 1 },
  ]

  public flagMostrarAzulejos = false;

  @Output() public listaOS: EventEmitter<Listado[]> = new EventEmitter<Listado[]>();
  @Output() public listaActas: EventEmitter<Listado[]> = new EventEmitter<Listado[]>();

  constructor(
    private mandoService: MandoService
  ) {}

  ngOnInit(): void { 
    this.listaAzulejosOS.forEach(a => {
      this.mandoService.getCountOS(a.estadoID).subscribe(
        (r) => {
          a.total = `(${r})`;
        });
    });

    this.listaAzulejosActas.forEach(a => {
      this.mandoService.getCountActas(a.estadoID).subscribe(
        (r) => {
          a.total = `(${r})`;
        });
    });
  }

  /**
   * Obtiene las OS segun estado según el azulejo pulsado
   * @param estadoID 
   */
  public getOS(estadoID: number) {

    //Ocultamos los azulejos de las actas
    this.flagMostrarAzulejos = false;

    //Obtenemos las OS
    /*this.mandoService.getOS(estadoID).subscribe(
      (resp: Listado[]) => {
        this.listaOS.emit(resp);
      }
    );*/
  }

  /**
   * Obtiene las Actas segun estado el azulejo pulsado
   * @param estadoID 
   */
  public getActas(estadoID: number) {
    /*this.mandoService.getActas(estadoID).subscribe(
     (resp: Listado[]) => {
        this.listaActas.emit(resp);
      }
    );*/
  }

  /**
   * Muestra o oculta los azulejos de las actas
   */
  public activarAzulejosActas() {
    this.flagMostrarAzulejos = !this.flagMostrarAzulejos;

    //Vaciamos la lista de OS para ocultar la tabla
    this.listaOS.emit([] as Listado[]);
  }

}
