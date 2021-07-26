import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, of, throwError } from 'rxjs';
import { ComunicacioncorreoService } from '../core/comunicacioncorreo.service';
import { NotificacionCorreoElectronico } from '../models/notificacionCorreoElectronico';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { AG_GRID_LOCALE_ES, REGISTRO_ACEPTADO} from '../../assets/constants.js';
import { AcceptDialogComponent } from '../accept-dialog/accept-dialog.component';


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
  errorMsg: string ="";

  constructor(public dialogRef: MatDialogRef<SolicitudesPdtsComponent>,
    private comcorreo: ComunicacioncorreoService,
    private dialog: MatDialog) { 
    this.columnDefs = [
      {headerCheckboxSelection: true, headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true, maxWidth: 50, pinned: 'left'},
      { headerName: 'Orden de Servicio', field: 'codigoOS'},
      { headerName: 'Provincia', field: 'desProvincia', enableRowGroup: true},
      { headerName: 'Fecha diligencia', field: 'strFechaDiligencia', comparator: this.dateComparator.bind(this)},
      { headerName: 'NIF Empresa', field: 'nifEmpresa'},
      { headerName: 'Correo electrónico', field: 'correoElectronico'}
  ];

  this.rowData = new Observable<NotificacionCorreoElectronico[]>();

  this.defaultColDef = {
    flex: 1,
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

    this.comcorreo.getSolicitudesPendientes().subscribe((data) => {
        this.rowData = data;
      });
  }

  gestionarBotonAceptar(){
    console.log(this);
      this.mostrarBoton = this.gridApi.getSelectedRows().length > 0 ? false : true;
  }

  aceptarNotificacion(){
    this.comcorreo
    .aceptarNotificacionCE(this.gridApi.getSelectedRows())
    .subscribe((aceptado: number) => {
      if(aceptado == REGISTRO_ACEPTADO){
        this.openDialog(1);
        //Recargamos el listado
        this.comcorreo.getSolicitudesPendientes().subscribe((data) => {
          this.rowData = data;
        }); 
      }
      else{
        this.openDialog(0);
      }    
    });
    
  }

  rechazarNotificacion(){
    this.comcorreo.rechazarNotificacionCE(this.gridApi.getSelectedRows())
    .subscribe((notificacionCorreoElectronico: NotificacionCorreoElectronico) => {
      this.openDialog(2);
      this.comcorreo.getSolicitudesPendientes().subscribe((data) => {
        this.rowData = data;
      });     
    });
  }

  openDialog(tipoAccion: number): void {
    const dialogRef = this.dialog.open(AcceptDialogComponent, {
      width: '450px',
      data: { titulo: 'Gestión de la solicitud',
              cuerpo: (tipoAccion == 1) || (tipoAccion == 2) ? 
                      ((tipoAccion == 1) ? 'Solicitud aceptada.' : 'Solicitud rechazada.') :
                      'Los datos de la solicitud no existen.',
              boton: (tipoAccion == 0) ? 'Aceptar' : 'Cerrar'
            }
    });
  }

  // DATE COMPARATOR FOR SORTING
  dateComparator(date1, date2) {
    var date1Number = this.monthToNum(date1);
    var date2Number = this.monthToNum(date2);

    console.log(date1Number);
    if (date1Number === null && date2Number === null) {
      return 0;
    }
    if (date1Number === null) {
      return -1;
    }
    if (date2Number === null) {
      return 1;
    }

    return date1Number - date2Number;
  }

  // HELPER FOR DATE COMPARISON
  monthToNum(date) {
    if (date === undefined || date === null || date.length !== 10) {
      return null;
    }

    var yearNumber = date.substring(6, 10);
    var monthNumber = date.substring(3, 5);
    var dayNumber = date.substring(0, 2);

    var result = yearNumber * 10000 + monthNumber * 100 + dayNumber;
    // 29/08/2004 => 20040829
    return result;
  }
}
