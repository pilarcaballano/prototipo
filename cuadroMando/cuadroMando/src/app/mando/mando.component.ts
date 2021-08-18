import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Listado } from '../model/mando/Listado';
import { DialogoActasComponent } from './dialogo-actas/dialogo-actas.component';

@Component({
  selector: 'cuadro-mando',
  templateUrl: './mando.component.html',
  styleUrls: ['./mando.component.scss']
})
export class MandoComponent implements OnInit {

  public listaOS: Listado[] = [];

  constructor(public dialog: MatDialog) {}

  setOS(os: Listado[]){
    this.listaOS = os;
  }

  abrirDialogoActas(actas: Listado[], titulo: string = "Actas"){
    //Abrimos el dialogo de actas
    this.dialog.open(DialogoActasComponent, {
      width: "1200px", 
      data: {
        titulo: titulo,
        listadoActas: actas
      }
    });
  }

  ngOnInit(): void {
  }

}
