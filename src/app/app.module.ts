import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';


import { AppComponent } from './app.component';
import { EfeitosDirective } from './telacadastro/efeitos.directive';
import { AppRoutingModule } from './app-routing.module';
//import de telas
import { TelacadastroComponent } from './telacadastro/telacadastro.component';
import { TelaAcessoComponent } from './tela-acesso/tela-acesso.component';
import { TelacriarlembreteComponent } from './telacriarlembrete/telacriarlembrete.component';
import { TelapagenotfoundComponent } from './telapagenotfound/telapagenotfound.component';
import { InserirLembreteComponent } from './lembretes/inserir-lembrete/inserir-lembrete.component';
import { ListaLembreteComponent } from './lembretes/lista-lembrete/lista-lembrete.component';
import { TelalembreteComponent } from './telalembrete/telalembrete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EfeitosDirective,
    TelacadastroComponent,
    TelaAcessoComponent,
    TelacriarlembreteComponent,
    TelapagenotfoundComponent,
    InserirLembreteComponent,
    ListaLembreteComponent,
    TelalembreteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
