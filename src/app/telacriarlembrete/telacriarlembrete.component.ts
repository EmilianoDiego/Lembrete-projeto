import { Component } from '@angular/core';

@Component({
  selector: 'app-telacriarlembrete',
  templateUrl: './telacriarlembrete.component.html',
  styleUrls: ['./telacriarlembrete.component.css']
})
export class TelacriarlembreteComponent {
  lembretes:Array<string>=[];
  lembrete:string;

  salvar(){
    this.lembretes=[this.lembrete,...this.lembretes];
    this.lembrete='';
  }

}
