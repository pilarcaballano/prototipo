import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AcceptDialogComponent } from './accept-dialog.component';



@NgModule({
  declarations: [AcceptDialogComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AcceptDialogModule { }
