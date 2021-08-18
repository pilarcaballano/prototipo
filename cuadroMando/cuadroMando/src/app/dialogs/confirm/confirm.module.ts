import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmComponent } from './confirm.component';



@NgModule({
  declarations: [ConfirmComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ConfirmModule { }
