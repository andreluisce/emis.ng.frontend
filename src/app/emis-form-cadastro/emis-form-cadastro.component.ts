import {Component, OnInit} from '@angular/core';

import {CepService} from "app/services/cep.service";
import {Cep} from "app/models/cep.model";

@Component({selector: 'app-emis-form-cadastro', templateUrl: './emis-form-cadastro.component.html', styleUrls: ['./emis-form-cadastro.component.css']})
export class EmisFormCadastroComponent implements OnInit {
		public cep;
public maskCEP = [ /[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

public maskCPF = [/[0-9]/, /\d/, /\d/,'.', /[0-9]/,/\d/, /\d/,'.',/[0-9]/,/\d/, /\d/,'-', /[0-9]/,/\d/];

maskPhone = ['(', /\d/,/\d/, ')', /\d/, /\d/, /\d/, /\d/, '-',/\d/,/\d/,/\d/,/\d/ ];
maskMobile = ['(', /\d/,/\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, '-',/\d/,/\d/,/\d/,/\d/ ];

		maskPhonefunction(number) {
				let myString = number.replace(/\D/g, '');
				if (myString.length < 11) 
						return this.maskPhone;
				else 
						return this.maskMobile

		}
 buscarCep(cep) {
	 				this
						._cepService
						.getCEP(cep.replace(/\D/g, ''))
						.subscribe((cep : Cep) => {});
 }
		///\d{2}\.\d{3}\-\d{3}/

		constructor(private _cepService : CepService) {}

		ngOnInit() {}

		getCep() {

		}

}
