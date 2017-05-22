import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {EmisFormCadastroComponent} from "app/emis-form-cadastro/emis-form-cadastro.component";
import {EmisInfoComponent} from "app/emis-info/emis-info.component";
import {EmisHomeComponent} from "app/emis-home/emis-home.component";

const routes : Routes = [
  {
    path: 'cadastro',
    component: EmisFormCadastroComponent
  }, {
    path: 'info',
    component: EmisInfoComponent
  },
  {
    path: '',
    component: EmisHomeComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}