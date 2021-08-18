import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { OrdenServicioService } from 'src/app/core/accionInspectora/orden-servicio.service';
import { OrdenServicio } from 'src/app/model/accionInspectora/ordenServicio/OrdenServicio';
import { EstadoOS } from 'src/app/model/mando/EstadosOS';
import { Provincia } from 'src/app/model/mando/Provincia';
import { User } from 'src/app/model/User';

@Component({
  selector: 'cuadro-consulta-orden-servicio',
  templateUrl: './consulta-orden-servicio.component.html',
  styleUrls: ['./consulta-orden-servicio.component.scss']
})
export class ConsultaOrdenServicioComponent implements OnInit {

  public consultaOS: FormGroup;
  public campoID: FormControl;
  public campoActuante: FormControl;
  public campoIDActuante: FormControl;
  public campoUsuarioCreacion: FormControl;
  public campoIDUsuarioCreacion: FormControl;
  public campoProvincia: FormControl;
  public campoEstado: FormControl;
  public fechaDesde: FormControl;
  public fechaHasta: FormControl;

  public provincias: Provincia[];
  public estados: EstadoOS[];
  public listadoOrdenesServicio: OrdenServicio[];

  public displayedColumns: string[] = ["id", "estado", "provincia", "actuante", "usuarioCreacion", "fechaCreacion"];
  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [1, 5, 10, 25, 100];

  constructor(private osService: OrdenServicioService,
    private titleService: Title,
    private snackBar: MatSnackBar,) {
  }

  ngOnInit(): void {
    this.titleService.setTitle("Consulta de Ordenes de servicio")

    this.listadoOrdenesServicio = undefined;

    //Iniciamos el formulario
    this.campoID = new FormControl("");
    this.campoActuante = new FormControl("");
    this.campoIDActuante = new FormControl("");
    this.campoUsuarioCreacion = new FormControl("");
    this.campoIDUsuarioCreacion = new FormControl("");
    this.campoProvincia = new FormControl("");
    this.campoEstado = new FormControl("");
    this.fechaDesde = new FormControl("");
    this.fechaHasta = new FormControl("");

    this.consultaOS = new FormGroup({
      id: this.campoID,
      idEstado: this.campoEstado,
      idProvincia: this.campoProvincia,
      idActuante: this.campoIDActuante,
      actuante: this.campoActuante,
      idUsuarioCreacion: this.campoIDUsuarioCreacion,
      usuarioCreacion: this.campoUsuarioCreacion,
      fechaDesde: this.fechaDesde,
      fechaHasta: this.fechaHasta
    });

    //Obtenemos los combos de provincias y estadosOS
    this.osService.getProvincias().subscribe((prov) => {
      this.provincias = prov;
    })

    this.osService.getEstadosOS().subscribe(estados => {
      this.estados = estados;
    })

    //Consultamos por primera vez
    this.updateData();
  }

  /**
   * Asigna el usuario de creacion devuelto por el dialogo
   * @param event 
   */
  public asignarUsuarioCreacion(u: User[]) {
    this.campoIDUsuarioCreacion.setValue(u[0].id);
    this.campoUsuarioCreacion.setValue(`${u[0].nombre} ${u[0].apellido1} ${u[0].apellido2}`);
  }

  /**
   * Asigna el usuario de creacion devuelto por el dialogo
   * @param event 
   */
  public asignarActuante(u: User[]) {
    this.campoIDActuante.setValue(u[0].id);
    this.campoActuante.setValue(`${u[0].nombre} ${u[0].apellido1} ${u[0].apellido2}`);
  }

  /**
   * Borra el actuante
   */
  public borrarActuante(e): void {
    e.preventDefault();
    this.campoActuante.setValue(undefined);
    this.campoIDActuante.setValue(undefined);
  }

  /**
   * Borra el actuante
   */
  public borrarUsuarioCreacion(e): void {
    e.preventDefault();
    this.campoUsuarioCreacion.setValue(undefined);
    this.campoIDUsuarioCreacion.setValue(undefined);
  }

  public onSubmit() {
    //Obtenemos las Ordenes de servicio
    this.updateData();
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  private updateData(page?: PageEvent){
    this.osService.getListadoOS(page, this.consultaOS.value).subscribe((os)=>{
      this.listadoOrdenesServicio = os.content;
      this.length = os.totalElements;

      if(os.totalElements <= 0){
        this.snackBar.open(`No se han encontrado ordenes de servicio con los filtros seleccionados.`, "Cerrar", {
          duration: 10000,
          verticalPosition: "top" as MatSnackBarVerticalPosition
        });
      }
    });
  }

  /**
   * Obtiene los datos del paginador y vuelve a consultar
   * @param page 
   */
   public onPageChange(page: PageEvent) {
    this.updateData(page);
  }
}
