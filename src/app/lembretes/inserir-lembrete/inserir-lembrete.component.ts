import { Component,Output,EventEmitter } from '@angular/core';
import { Lembrete} from '../lembrete.model';

@Component({
  selector: 'app-inserir-lembrete',
  templateUrl: './inserir-lembrete.component.html',
  styleUrls: ['./inserir-lembrete.component.css']
})
export class InserirLembreteComponent  {

  @Output() clienteAdicionado= new EventEmitter<Lembrete>();

  titulo:string;
  lembrete:string; 

  AdicionarLembrete(){
      const lembrete2:Lembrete={
          titulo:this.titulo,
          lembrete:this.lembrete,

      };
      this.clienteAdicionado.emit(lembrete2);
      console.log('inserindo cliente...');
      
      
  }


}
