import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/model/User';
import { ActuantesComponent } from '../actuantes.component';

@Component({
  selector: 'cuadro-control-actuante',
  templateUrl: './control-actuante.component.html',
  styleUrls: ['./control-actuante.component.scss']
})
export class ControlActuanteComponent implements OnInit {

  @Output() public actuanteSeleccionado: EventEmitter<User[]>;
  @Input() public disabled: boolean;

  constructor(private dialog: MatDialog) {
    this.actuanteSeleccionado = new EventEmitter<User[]>();
  }

  ngOnInit(): void {
  }

  /**
   * Abre el dialogo de actuantes
   */
  public abrirDialogoActuantes(e): void {
    e.preventDefault();

    //Si el componente esta deshabilitado, no lanzamos el dialogo
    if (!this.disabled) {
      let actuantes = this.dialog.open(ActuantesComponent, {
        width: "800px"
      });
      actuantes.afterClosed().subscribe((actuante: User[]) => {
        //Si hay un actuante seleccionado, lanzamos el evento
        if (actuante && actuante.length) {
          this.actuanteSeleccionado.emit(actuante);
        }
      });
    }

  }

}
