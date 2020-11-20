import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TelacadastroComponent } from './telacadastro/telacadastro.component';
import { EfeitosDirective } from './telacadastro/efeitos.directive';
import { TelaAcessoComponent } from './tela-acesso/tela-acesso.component';
import { TelacriarlembreteComponent } from './telacriarlembrete/telacriarlembrete.component';
import { AppRoutingModule } from './app-routing.module';
import { TelapagenotfoundComponent } from './telapagenotfound/telapagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,

    TelacadastroComponent,
    EfeitosDirective,
    TelaAcessoComponent,
    TelacriarlembreteComponent,
    TelapagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
