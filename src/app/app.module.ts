import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TelacadastroComponent } from './telacadastro/telacadastro.component';
import { EfeitosDirective } from './telacadastro/efeitos.directive';
import { TelaAcessoComponent } from './tela-acesso/tela-acesso.component';

@NgModule({
  declarations: [
    AppComponent,
    TelacadastroComponent,
    EfeitosDirective,
    TelaAcessoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
