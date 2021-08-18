import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'cuadro-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  public title: string;
  public content: string;
  public continueText: string;
  public abortText: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    title?: string,
    content?: string,
    continueText?: string,
    abortText?: string
  }) { }

  ngOnInit(): void {
    this.title = this.data && this.data.title ? this.data.title : "Confirmar";
    this.content = this.data && this.data.content ? this.data.content : "¿Desea continuar?";
    this.continueText = this.data && this.data.continueText ? this.data.continueText : "Continuar";
    this.abortText = this.data && this.data.abortText ? this.data.abortText : "Cancelar";
  }

}
