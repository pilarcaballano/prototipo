import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenServicioService } from 'src/app/core/accionInspectora/orden-servicio.service';
import { UsuariosService } from 'src/app/core/usuarios.service';
import { ActuantesComponent } from 'src/app/dialogs/actuantes/actuantes.component';
import { ConfirmComponent } from 'src/app/dialogs/confirm/confirm.component';
import { OrdenServicio } from 'src/app/model/accionInspectora/ordenServicio/OrdenServicio';
import { EstadoOS } from 'src/app/model/mando/EstadosOS';
import { Provincia } from 'src/app/model/mando/Provincia';
import { User } from 'src/app/model/User';

@Component({
  selector: 'cuadro-detalle-orden-servicio',
  templateUrl: './detalle-orden-servicio.component.html',
  styleUrls: ['./detalle-orden-servicio.component.scss']
})
export class DetalleOrdenServicioComponent implements OnInit {
  public detalleOsForm: FormGroup;
  public flagEdicion: boolean;
  public flagAlta: boolean;
  public provincias: Provincia[];
  public estados: EstadoOS[];

  public detalleOrdenServicio: OrdenServicio;

  public formOS: FormControl;
  public formEstado: FormControl;
  public formCodProvincia: FormControl;
  public formFechaCreacion: FormControl;
  public formUsuarioCreacion: FormControl;
  public formUsuarioCreacionID: FormControl;
  public formActuante: FormControl;
  public formActuanteID: FormControl;
  public formObservaciones: FormControl;

  constructor(
    private route: ActivatedRoute,
    private osService: OrdenServicioService,
    private router: Router,
    private snackBar: MatSnackBar,
    private titleService: Title,
    private dialog: MatDialog

  ) {
    this.flagAlta = false;
    this.flagEdicion = false;
  }

  ngOnInit(): void {
    this.detalleOrdenServicio = { id: this.route.snapshot.params['id'] as string }

    //Inicializamos el formulario;
    this.inicializarControles();

    //Si la ID esta informada, obtenemos la OS y entramos en modo consulta, sino entramos en modo alta
    if (this.detalleOrdenServicio.id) {
      this.consultarOS();
      this.establecerVisualizacionConsulta();

      //Establecemos el titutlo
      this.titleService.setTitle(`Detalle OS: ${this.detalleOrdenServicio.id}`);
    } else {
      this.establecerVisualizacionAlta();

      //Establecemos el titulo modo Alta
      this.titleService.setTitle(`Alta Orden Servicio`);
    }

    //Obtenemos los combos de provincias y estadosOS
    this.osService.getProvincias().subscribe((prov) => {
      this.provincias = prov;
    })

    this.osService.getEstadosOS().subscribe(estados => {
      this.estados = estados;
    })
  }


  /**
   * Inicializa los controles del formulario
   */
  private inicializarControles() {
    //Inicializamos los controles con valores vacios
    this.formOS = new FormControl('');
    this.formEstado = new FormControl('', [Validators.required]);
    this.formCodProvincia = new FormControl('', [Validators.required]);
    this.formFechaCreacion = new FormControl('');
    this.formUsuarioCreacion = new FormControl('', [Validators.required]);
    this.formUsuarioCreacionID = new FormControl('', [Validators.required]);
    this.formActuante = new FormControl('', [Validators.required]);
    this.formActuanteID = new FormControl('', [Validators.required]);
    this.formObservaciones = new FormControl('', [Validators.required, Validators.minLength(10)]);

    //Inicializamos el from group y asignamos los controles
    this.detalleOsForm = new FormGroup({
      id: this.formOS,
      estadoID: this.formEstado,
      codProvincia: this.formCodProvincia,
      fechaCreacion: this.formFechaCreacion,
      usuarioCreacionID: this.formUsuarioCreacionID,
      usuarioCreacion: this.formUsuarioCreacion,
      actuantesID: this.formActuanteID,
      actuantes: this.formActuante,
      observaciones: this.formObservaciones
    });
  }

  /**
   * Obtiene el detalle de la OS y lo asigna los valores a los controles del formulario
   */
  private consultarOS() {
    this.osService.getOSById(this.detalleOrdenServicio.id).subscribe((os: OrdenServicio) => {
      console.log("OS:", os);

      //Comprobamos que la OS existe
      if (!os) {
        this.router.navigate(["/pagina-no-encontrada"]);
      }

      //Guardamos la OS
      this.detalleOrdenServicio = os;

      //Asignamos los valores a los controles
      this.formOS.setValue(os.id);
      this.formEstado.setValue(os.estado ? os.estado.estadoID : undefined);
      this.formCodProvincia.setValue(os.provincia ? os.provincia.id : undefined);
      this.formFechaCreacion.setValue(os.fechaCreacion);
      if (os.usuarioCreacion) {
        this.formUsuarioCreacionID.setValue(os.usuarioCreacion.id);
        this.formUsuarioCreacion.setValue(`${os.usuarioCreacion.nombre} ${os.usuarioCreacion.apellido1} ${os.usuarioCreacion.apellido2}`);  
      }
      
      if (os.actuante) {
        this.formActuanteID.setValue(os.actuante.id);
        this.formActuante.setValue(`${os.actuante.nombre} ${os.actuante.apellido1} ${os.actuante.apellido2}`);
      }
      this.formObservaciones.setValue(os.observaciones);
    })
  }

  /**
   * Pone la ventana en modo edición
   */
  public editar($event): void {
    $event.preventDefault();
    //Consultamos la OS
    this.consultarOS();

    //Establecemos la ventana en modo edicion;
    this.establecerVisualizacionEditar();

  }

  /**
   * Obtiene los datos y pone la ventana en modo consulta
   */
  public cancelar($event): void {
    $event.preventDefault();
    //Reseteamos el formulario
    this.consultarOS();

    //Ponemos la ventana en modo consulta
    this.establecerVisualizacionConsulta();
  }

  /**
   * Cambia la visualizacion de los controles para poner la ventana en modo consulta
   */
  private establecerVisualizacionConsulta() {
    this.formOS.disable();
    this.formEstado.disable();
    this.formCodProvincia.disable();
    this.formFechaCreacion.disable();
    this.formUsuarioCreacion.disable();
    this.formActuante.disable();
    this.formUsuarioCreacionID.disable();
    this.formActuanteID.disable();
    this.formObservaciones.disable();


    this.flagAlta = false;
    this.flagEdicion = false;
  }

  /**
   * Cambia la visualizacion de los controles para poner la ventana en modo edición
   */
  private establecerVisualizacionEditar() {
    this.formOS.disable();
    this.formEstado.enable();
    this.formCodProvincia.enable();
    this.formFechaCreacion.disable();
    this.formUsuarioCreacion.disable();
    this.formActuante.enable();
    this.formUsuarioCreacionID.disable();
    this.formActuanteID.enable();
    this.formObservaciones.enable();

    this.flagAlta = false;
    this.flagEdicion = true;
  }

  /**
   * Cambia la visualizacion de los controles para poner la ventana en modo alta
   */
  private establecerVisualizacionAlta() {
    this.formOS.disable();
    this.formEstado.enable();
    this.formCodProvincia.enable();
    this.formFechaCreacion.disable();
    this.formUsuarioCreacion.disable();
    this.formActuante.enable();
    this.formUsuarioCreacionID.disable();
    this.formActuanteID.enable();
    this.formObservaciones.enable();

    this.flagAlta = true;
    this.flagEdicion = false;
  }

  onSubmit() {
    this.detalleOrdenServicio = { ...this.detalleOrdenServicio, ...this.detalleOsForm.value };

    //Generamos los objetos de provincia y estado
    this.detalleOrdenServicio.estado = { estadoID: this.detalleOsForm.value.estadoID  , estado: '' }
    this.detalleOrdenServicio.provincia = { id: this.detalleOsForm.value.codProvincia, descProvincia: '' }

    //Asignamos la fecha de creación
    this.detalleOrdenServicio.fechaCreacion = new Date(this.detalleOrdenServicio.fechaCreacion);

    //Comprobamos si el formulario contiene errores de validación
    if (this.detalleOsForm.valid) {

      //Insertamos o actualizamos la OS
      if (this.flagEdicion) {
        this.osService.putOS(this.detalleOrdenServicio).subscribe(
          (os: OrdenServicio) => {
            this.flagEdicion = false;
            //Volvemos a cargar los campos
            this.osService.getOSById(os.id).subscribe(r => this.detalleOrdenServicio = r)
            this.establecerVisualizacionConsulta();
            //Mostramos la barra de confirmacion
            this.snackBar.open(`Orden de servicio modificada con exito.`, "Cerrar", {
              duration: 10000,
              verticalPosition: "top" as MatSnackBarVerticalPosition
            });
          },
          //SI hay algun problema a la hora de acctualizar la OS en el microservicio
          err => {
            this.showError(err);
          })
      } else if (this.flagAlta) {
        //Asignamos usuario creacion
        this.detalleOrdenServicio.usuarioCreacion = {id: 1};
        this.osService.postOS(this.detalleOrdenServicio).subscribe(
          //Si la OS se inserta correctamente
          (os: OrdenServicio) => {
            //Navegamos a modo consulta una vez guardada la OS
            this.router.navigate(["/detalleOrden", os.id]);
            //Mostramos la barra de confirmacion
            this.snackBar.open(`Orden de servicio generada con exito.`, "Cerrar", {
              duration: 10000,
              verticalPosition: "top" as MatSnackBarVerticalPosition
            });
          },
          //SI hay algun problema a la hora de insertar la OS en el microservicio
          err => {
            this.showError(err);
          })
      }
    } else {
      this.snackBar.open("Por favor, compruebe que los datos son correctos e inténtelo de nuevo. ", "Cerrar", {
        duration: 10000,
        verticalPosition: "top" as MatSnackBarVerticalPosition
      });
    }
  }

  /**
   * Muestra el snackbar de error en la parte superior
   * @param err 
   */
  private showError(err): void {
    console.log("ERROR", err);
    this.snackBar.open(err.error, "Cerrar", {
      duration: 10000,
      verticalPosition: "top" as MatSnackBarVerticalPosition
    });
  }

  /**
   * Asigna el usuario de creacion devuelto por el dialogo
   * @param event 
   */
  public asignarUsuarioCreacion(u) {
    this.detalleOrdenServicio.usuarioCreacion = u[0];
    this.formUsuarioCreacionID.setValue(u[0].id);
    this.formUsuarioCreacion.setValue(`${u[0].nombre} ${u[0].apellido1} ${u[0].apellido2}`);
  }

  /**
   * Asigna el usuario de creacion devuelto por el dialogo
   * @param event 
   */
  public asignarActuante(u: User[]) {
    this.detalleOrdenServicio.actuante = u[0];
    this.formActuanteID.setValue(u[0].id);
    this.formActuante.setValue(`${u[0].nombre} ${u[0].apellido1} ${u[0].apellido2}`);
  }

  /**
   * Borra el actuante
   */
  public borrarActuante(e): void {
    e.preventDefault();
    //Borramos el actuante si el control esta deshabilitado
    if (this.flagEdicion || this.flagAlta) {
      this.formActuanteID.setValue(undefined);
      this.formActuante.setValue(undefined);
    }
  }

  /**
   * Metodo encargado de borrar la OS
   * @param e 
   */
  public borrarOS(e): void {
    e.preventDefault();
    //Abrimos el dialogo de confirmacion.
    let confirm = this.dialog.open(ConfirmComponent, {
      data: {
        title: "Aviso",
        content: "¿Está seguro de eliminar la Orden de Servicio?"
      }
    });

    //Cuando se cierre el dialogo, comprobamos si ha pulsado sobre aceptar o cancelar, y borramos
    confirm.afterClosed().subscribe((r: boolean) => {
      //Si pulsa sobre aceptar
      if (r === true) {
        //Borramos la OS
        this.osService.deleteOS(this.detalleOrdenServicio.id).subscribe(
          //Si la OS se ha borrado correctamente, navegamos a cuadro de mando
          () => {
            //Navegamos a modo consulta una vez guardada la OS
            this.router.navigate(["/consultaOS"]);
            //Mostramos la barra de confirmacion
            this.snackBar.open(`Se ha borrado correctamente la Orden de Servicio ${this.detalleOrdenServicio.id}`, "Cerrar", {
              duration: 10000,
              verticalPosition: "top" as MatSnackBarVerticalPosition
            });
          },
          //SI hay algun problema a la hora de insertar la OS en el microservicio
          err => {
            this.showError(err);
          }
        );
      }
    })
  }
}
