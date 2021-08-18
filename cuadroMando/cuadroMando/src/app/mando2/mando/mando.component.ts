import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { MandoService } from 'src/app/core/mando.service';
import { Azulejo } from 'src/app/shared/azulejo/azulejo';
import { DialogoListadoComponent } from '../dialogo-listado/dialogo-listado.component';

@Component({
  selector: 'cuadro-mando',
  templateUrl: './mando.component.html',
  styleUrls: ['./mando.component.scss']
})
export class MandoComponent implements OnInit {

  azulejosOS: Azulejo[] = [
    {title: "OS. Borrador", data: {idEstado: 0}},
    {title: "OS. Generadas", data: {idEstado: 1}},
    {title: "OS. Finalizadas", data: {idEstado: 5}},
    {title: "OS. Pendientes", data: {idEstado: 2}}
  ];

  azulejosActas: Azulejo[] = [
    {title: "Actas Borrador", data: {idEstado: 0}},
    {title: "Actas En Tramite", data: {idEstado: 1}},
  ];

  flagMostrarActas: boolean; //Indica si se muestran los azulejos de actas

  constructor(
    private mandoService: MandoService,
    public dialog: MatDialog,
    private titleService: Title) {
      titleService.setTitle("Cuadro de Mando");
  }

  ngOnInit(): void {
    //Obtenemos el total de OS y Actas para cada azulejo
    this.azulejosOS.forEach(a=> {
      this.mandoService.getCountOS({idEstado: a.data.idEstado}).subscribe(t=>{
        a.total = `${t}`;
      });
    });

    this.azulejosActas.forEach(a=> {
      this.mandoService.getCountActas({idEstado: a.data.idEstado}).subscribe(t=>{
        a.total = `${t}`;
      });
    });
  }

  /**
   * Abre el dialogo con las OS
   * @param a 
   */
  public abrirDialogoOS(a: Azulejo):void{
    //Abrimos el dialogo de Listado
    console.log("abrirDialogoOS",a);
    this.dialog.open(DialogoListadoComponent, {
      width: "1200px", 
      data: {
        title: a.title,
        idEstado: a.data.idEstado
      }
    });
  }

  /**
   * Abre el dialogo con las actas
   * @param a 
   */
  public abrirDialogoActas(a: Azulejo):void{
    //Abrimos el dialogo del Listado
    this.dialog.open(DialogoListadoComponent, {
      width: "1200px", 
      data: {
        title: a.title,
        esActas: true,
        idEstado: a.data.idEstado
      }
    });
  }

  /**
   * Muestra o oculta los azulejos de actas
   */
  public mostrarOcultarActas():void{
    if(this.flagMostrarActas === true){
      this.flagMostrarActas = false;
    }else {
      this.flagMostrarActas = true;
    }
  }

}
