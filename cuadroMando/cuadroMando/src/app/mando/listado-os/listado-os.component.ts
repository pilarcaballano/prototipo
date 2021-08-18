import { Component, Input, OnInit } from '@angular/core';
import { Listado } from 'src/app/model/mando/Listado';


@Component({
  selector: 'cuadro-listado-os',
  templateUrl: './listado-os.component.html',
  styleUrls: ['./listado-os.component.scss']
})
export class ListadoOsComponent implements OnInit {

  @Input() public listadoOS: Listado[] = [];

  displayedColumns: string[] = ["id", "estado", "fechaCreacion", "actuantes", "usuarioCreacion", "provincia"];
  

  constructor() { }

  ngOnInit(): void {
  }


}
