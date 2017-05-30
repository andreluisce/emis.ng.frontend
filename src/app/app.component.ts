import { Component } from '@angular/core';

import { CepService } from "app/services/cep.service";
import { FormCadastroService } from "app/emis-form-cadastro/services/form-cadastro.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CepService, FormCadastroService ]
})
export class AppComponent {
}
