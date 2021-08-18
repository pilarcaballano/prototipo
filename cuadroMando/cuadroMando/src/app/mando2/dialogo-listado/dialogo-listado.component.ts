import { Component, ComponentFactoryResolver, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MandoService } from 'src/app/core/mando.service';
import { UsuariosService } from 'src/app/core/usuarios.service';
import { Listado } from 'src/app/model/mando/Listado';
import { User } from 'src/app/model/User';

@Component({
  selector: 'cuadro-dialogo-listado',
  templateUrl: './dialogo-listado.component.html',
  styleUrls: ['./dialogo-listado.component.scss']
})
export class DialogoListadoComponent implements OnInit {

  displayedColumns: string[] = ["id", "estado", "fechaCreacion", "actuantes", "usuarioCreacion", "provincia"];

  public title: string;

  private filter: any;
  public listado: Listado[];

  public rutaDetalle: string;

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [1, 5, 10, 25, 100];

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private mandoService: MandoService,
    private usuarioService: UsuariosService) {

    this.title = data.title;
    this.filter = {};
    this.filter.idEstado = data.idEstado;
  }

  ngOnInit(): void {
    if (this.data.esActas === true) {
      //Obtenemos las actas y ponemos la cabecera de naturaleza
      this.displayedColumns = [...this.displayedColumns.slice(0, 3), "naturaleza", ...this.displayedColumns.slice(3)];
      this.rutaDetalle = "/detalleActas";
    } else {
      this.rutaDetalle = "/detalleOrden";
    }

    //Obtenemos los datos del listado
    this.updateData();
  }

  /**
   * Obtiene los datos del paginador y vuelve a consultar
   * @param page 
   */
  public onPageChange(page: PageEvent) {
    //Borramos el listado anterior
    //this.listado = [{}];
    //Consultamos los datos
    this.updateData(page);
  }

  /**
   * Obtiene los datos del listado
   */
  private updateData(page: PageEvent = undefined) {
    //Si el paginador esta informado, asignamos la pagina y el numero de objetos al filtro
    if (page) {
      this.filter.paginatorIndex = page.pageIndex;
      this.filter.paginatorSize = page.pageSize;
    }

    //Consultamos con el paginador nuevo
    if (this.data.esActas) {
      //TODO modificar el microservicio de actas, igualarlo a OS
      this.mandoService.getActas(this.filter).subscribe((l) => {
        //Asignamos el listado
        this.listado = l;
      });
      this.mandoService.getCountActas(this.filter).subscribe(c=>{
        this.length = c;
      })  
    } else {
      this.mandoService.getOS(this.filter).subscribe((l) => {
        //Asignamos el listado
        this.listado = l.content;
        this.length = l.totalElements;
      });
      console.log("Ordenes: -->", this.listado);
    }


  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

}
