import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EmisFormCadastroComponent} from "app/emis-form-cadastro/emis-form-cadastro.component";

const routes : Routes = [
  {
    path: 'cadastro',
    component: EmisFormCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
