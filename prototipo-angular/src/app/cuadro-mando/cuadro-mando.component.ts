import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


@Component({
  selector: 'protangu-cuadro-mando',
  templateUrl: './cuadro-mando.component.html',
  styleUrls: ['./cuadro-mando.component.scss']
})
export class CuadroMandoComponent implements OnInit {

  mostrarDetallePendientes!: boolean;
  mostrarTablaPendientes!: boolean;
  // private gridApi;
  // private gridColumnApi;
  defaultColDef : any;
  columnDefs : any;
  rowData: [];

  constructor(private http: HttpClient) { 
    this.columnDefs = [
      { field: 'Provincia', },
      { field: 'Orden de Servicio'},
      { field: 'Fecha diligencia'},
      { field: 'NIF Empresa'},
      { field: 'Correo electrónico'}
  ];

  this.rowData = [];

  this.defaultColDef = {
    width: 240,
    sortable: true, 
    filter: true, 
    resizable: true
  };
  }

  // onGridReady(params: { api: any; columnApi: any; }) {
  //   this.gridApi = params.api;
  //   this.gridColumnApi = params.columnApi;

  //   this.http
  //     .get('https://www.ag-grid.com/example-assets/olympic-winners.json')
  //     .subscribe((data) => {
  //       this.rowData = data;
  //     });
  // }

  
  ngOnInit(): void {
    this.mostrarDetallePendientes = false;
    this.mostrarTablaPendientes = false;
  }

  activarDetallePendientes(){
    this.mostrarDetallePendientes = !this.mostrarDetallePendientes;
    if(this.mostrarTablaPendientes){
      this.mostrarTablaPendientes = false;
    }
  }

  activarTablaPendientes(){
    this.mostrarTablaPendientes = !this.mostrarTablaPendientes;
  }

  

  
}
