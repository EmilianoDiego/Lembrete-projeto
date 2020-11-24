import{ Component} from '@angular/core';
import {Lembrete} from '../lembretes/lembrete.model';


@Component({
  selector: 'app-telalembrete',
  templateUrl: './telalembrete.component.html',
  styleUrls: ['./telalembrete.component.css']
})
export class TelalembreteComponent  {

  lembretes:Lembrete[]=[];

LembreteAdicionado(lembrete2){
  this.lembretes=[...this.lembretes,lembrete2];
  console.log(lembrete2);
}


}
