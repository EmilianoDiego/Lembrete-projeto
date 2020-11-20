import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TelacadastroComponent } from './telacadastro/telacadastro.component';
import { TelaAcessoComponent } from './tela-acesso/tela-acesso.component';
import { TelacriarlembreteComponent } from './telacriarlembrete/telacriarlembrete.component';
import { TelapagenotfoundComponent } from './telapagenotfound/telapagenotfound.component';

const routes: Routes = [
  {path:"",redirectTo: '/telacadastro', pathMatch:'full'},
  {path:"telacadastro",component: TelacadastroComponent},
  { path:"tela-acesso",component: TelaAcessoComponent},
  { path:"telacriarlembrete", component: TelacriarlembreteComponent},
  {path:"**",component:TelapagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
