import {Component, OnInit} from '@angular/core';

import {CepService} from "app/services/cep.service";
import {Cep} from "app/models/cep.model";
import {maskMobile, maskPhone, maskCEP, maskCPF} from "../statics/masks"

@Component({selector: 'app-emis-form-cadastro', templateUrl: './emis-form-cadastro.component.html', styleUrls: ['./emis-form-cadastro.component.css']})
export class EmisFormCadastroComponent implements OnInit {
		public cep;

		maskPhonefunction(number) {
				let myString = number.replace(/\D/g, '');
				if (myString.length > 10) 
						return maskMobile
				else 
						return maskPhone;

				}
		buscarCep(cep) {
				this
						._cepService
						.getCEP(cep.replace(/\D/g, ''))
						.subscribe((cep : Cep) => {});
		}

		constructor(private _cepService : CepService) {}

		ngOnInit() {}

}
