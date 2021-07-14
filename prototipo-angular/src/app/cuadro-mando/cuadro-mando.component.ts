import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { SolicitudesPdtsComponent } from '../solicitudes-pdts/solicitudes-pdts.component';
import { MatDialog } from '@angular/material/dialog';
import { ComunicacioncorreoService } from '../core/comunicacioncorreo.service';


@Component({
  selector: 'protangu-cuadro-mando',
  templateUrl: './cuadro-mando.component.html',
  styleUrls: ['./cuadro-mando.component.scss']
})
export class CuadroMandoComponent implements OnInit {

  mostrarDetallePendientes!: boolean;
  numSolPendientes : string;
  numSolicitudes : string;

  constructor(private http: HttpClient,
    private tablaPendientes: MatDialog,
    private comcorreo: ComunicacioncorreoService) { 
      this.numSolPendientes = "-";
      this.numSolicitudes = "-";
  }

  
  async ngOnInit(): Promise<any> {
    this.mostrarDetallePendientes = false;
    this.comcorreo.getNumSolicitudes().then((data) => {
      this.numSolicitudes =  data;
    });
  }

  activarDetallePendientes(){
    this.comcorreo.getNumSolicitudesPendientes().then((data) => {
      this.numSolPendientes =  data;
    });
    this.mostrarDetallePendientes = !this.mostrarDetallePendientes;
    
  }

  mostrarTablaPendientes(): void {
    const dialogRef = this.tablaPendientes.open(SolicitudesPdtsComponent, {
      width: '80%'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.comcorreo.getNumSolicitudes().then((data) => {
        this.numSolicitudes =  data;
      });
      this.comcorreo.getNumSolicitudesPendientes().then((data) => {
        this.numSolPendientes =  data;
      });
    });
  }

  

  
}
