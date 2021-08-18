import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UsuariosService } from 'src/app/core/usuarios.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'cuadro-actuantes',
  templateUrl: './actuantes.component.html',
  styleUrls: ['./actuantes.component.scss']
})
export class ActuantesComponent implements OnInit {

  public  filtros: FormGroup;
  public usuarios: MatTableDataSource<User>;
  public selection: SelectionModel<User>

  readonly displayedColumns: string[] = ["selection", "nombre", "primerApellido", "segundoApellido"];
  public pageSizeOptions: number[] = [1, 5, 10, 25, 100];
  public length = 100;
  public pageSize = 10;

  constructor(private usuariosService: UsuariosService) {

  }

  ngOnInit(): void {
    //Inicializamos el DataSource y la lista de seleccionados
    this.usuarios = new MatTableDataSource<User>();
    this.selection = new SelectionModel<User>();

    this.filtros = new FormGroup({
      nombre: new FormControl(undefined),
      apellido1: new FormControl(undefined),
      apellido2: new FormControl(undefined)
    });
    //Obtenemos los actuantes al cargar
    this.updateData();

  }

  /**
   * Obtiene los datos del paginador y vuelve a consultar
   * @param page 
   */
  public onPageChange(page: PageEvent) {
    //Consultamos los datos
    this.updateData(page);
  }

  /**
   * Consulta en DDBB los actuantes
   * @param page 
   */
  private updateData(page?: PageEvent) {
    this.usuariosService.getUsuarios(page, this.filtros.value).subscribe(
      (r: any) => {
        this.usuarios.data = r.content;
        this.length = r.totalElements
      }
    );
    //Al modificar el paginador, borramos la seleccion
    this.selection.clear();
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
    //Al modificar el paginador, borramos la seleccion
    this.selection.clear();
  }


  onSubmit() {
    this.updateData();
  }
}
