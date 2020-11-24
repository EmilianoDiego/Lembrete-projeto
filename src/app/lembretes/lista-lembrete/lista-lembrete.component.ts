import { Component, OnInit,Input } from '@angular/core';
import { Lembrete} from '../lembrete.model';

@Component({
  selector: 'app-lista-lembrete',
  templateUrl: './lista-lembrete.component.html',
  styleUrls: ['./lista-lembrete.component.css']
})
export class ListaLembreteComponent implements OnInit {

  @Input()lembretes:Lembrete[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
