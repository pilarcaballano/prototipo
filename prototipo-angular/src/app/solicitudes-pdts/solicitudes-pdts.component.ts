import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, throwError } from 'rxjs';
import { ComunicacioncorreoService } from '../core/comunicacioncorreo.service';
import { NotificacionCorreoElectronico } from '../models/notificacionCorreoElectronico';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { AG_GRID_LOCALE_ES } from '../../assets/constants.js';
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'protangu-solicitudes-pdts',
  templateUrl: './solicitudes-pdts.component.html',
  styleUrls: ['./solicitudes-pdts.component.scss']
})
export class SolicitudesPdtsComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
  private autoGroupColumnDef: any;
  private rowGroupPanelShow;
  defaultColDef : any;
  columnDefs : any;
  rowData: Observable<NotificacionCorreoElectronico[]>;
  private localeText: any;
  mostrarBoton : boolean = true;

  constructor(public dialogRef: MatDialogRef<SolicitudesPdtsComponent>,
    private comcorreo: ComunicacioncorreoService) { 
    this.columnDefs = [
      {headerCheckboxSelection: true, headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true, maxWidth: 50, pinned: 'left'},
      { headerName: 'Orden de Servicio', field: 'codigoOS'},
      { headerName: 'Provincia', field: 'desProvincia', enableRowGroup: true},
      { headerName: 'Fecha diligencia', field: 'fechaDiligencia'},
      { headerName: 'NIF Empresa', field: 'nifEmpresa'},
      { headerName: 'Correo electrónico', field: 'correoElectronico'}
  ];

  this.rowData = new Observable<NotificacionCorreoElectronico[]>();

  this.defaultColDef = {
    flex: 1,
    // width: 20,
    sortable: true, 
    filter: true, 
    resizable: true    
  }; 

  this.localeText = AG_GRID_LOCALE_ES;
  this.autoGroupColumnDef = { minWidth: 50 };
  this.rowGroupPanelShow = 'always';
  
}

  ngOnInit(): void {
    
  }

  onGridReady(params: { api: any; columnApi: any; }) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.comcorreo
      .getSolicitudesPendientes()
      .pipe(retry(3))
      .subscribe((data) => {
        this.rowData = data;
      });
  }

  gestionarBotonAceptar(){
      this.mostrarBoton = this.gridApi.getSelectedRows().length > 0 ? false : true;
      console.log(this.gridApi.getSelectedRows());
  }

  aceptarNotificacion(){
    this.comcorreo
    .aceptarNotificacionCE(this.gridApi.getSelectedRows())
    .pipe(retry(3))
    .subscribe((notificacionCorreoElectronico: NotificacionCorreoElectronico) => {
      // this.openDialog();
      window.alert('Datos actualizados!');               
      this.comcorreo
      .getSolicitudesPendientes()
      .pipe(retry(3))
      .subscribe((data) => {
        this.rowData = data;
      });     
    });
    
  }

  rechazarNotificacion(){
    this.comcorreo
    .rechazarNotificacionCE(this.gridApi.getSelectedRows())
    .pipe(retry(3))
    .subscribe((notificacionCorreoElectronico: NotificacionCorreoElectronico) => {
      // this.openDialog();
      window.alert('Datos actualizados!');               
      this.comcorreo
      .getSolicitudesPendientes()
      .pipe(retry(3))
      .subscribe((data) => {
        this.rowData = data;
      });     
    });
    
  }

}
