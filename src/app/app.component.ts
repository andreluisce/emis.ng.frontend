import { Component } from '@angular/core';

import {CepService} from "app/services/cep.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CepService]
})
export class AppComponent {
}
