import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

import { CepService } from "app/services/cep.service";
import { Cep } from "app/models/cep.model";

@Component({ selector: 'app-emis-form-cadastro', templateUrl: './emis-form-cadastro.component.html', styleUrls: ['./emis-form-cadastro.component.css'] })
export class EmisFormCadastroComponent {
	@ViewChild('form') formularioCadastro: NgForm;
	endereco: string;
	cidade: string;
	estado: string;
	loadingCEP: boolean;

	maskCEP = [/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
	maskCPF = [/[0-9]/, /\d/, /\d/, '.', /[0-9]/, /\d/, /\d/, '.', /[0-9]/, /\d/, /\d/, '-', /[0-9]/, /\d/];
	maskPhone = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
	maskMobile = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

	buscarCep(cep: any) {
		cep = cep.replace(/\D/g, '');
		if (!this.cepIsValid(cep)) {
			this.formularioCadastro.controls['cep'].setErrors({'invalid': true});
			return false;

		}
		this.loadingCEP = true;
		this
			._cepService
			.getCEP(cep)
			.subscribe((cep: Cep) => {
				this.endereco = cep.logradouro;
				this.cidade = cep.localidade;
				this.estado = cep.uf;


			}, (error: any) => {
			});
	}

	cepIsValid(cep: string):boolean {
		return cep.length === 8;
	}
	onSubmit(form: NgForm) {
		console.log(form)
	}


	constructor(private _cepService: CepService) { }

}
