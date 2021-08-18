import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'cuadro-dialogo-actas',
  templateUrl: './dialogo-actas.component.html',
  styleUrls: ['./dialogo-actas.component.scss']
})
export class DialogoActasComponent implements OnInit {

  displayedColumns: string[] = ["id", "estado", "fechaCreacion", "actuantes", "usuarioCreacion", "provincia"];


  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    if(true){
      this.displayedColumns = [...this.displayedColumns.slice(0,3), "naturaleza", ...this.displayedColumns.slice(3)]
    }
  }

  ngOnInit(): void {
  }

}
