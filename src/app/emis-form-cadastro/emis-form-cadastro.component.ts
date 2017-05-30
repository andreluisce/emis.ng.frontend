import { OnInit } from '@angular/core/core';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

import { CepService } from "app/services/cep.service";
import { FormCadastroService } from "./services/form-cadastro.service";

import { Cep } from "app/models/cep.model";
import { validarCPF } from "../statics/helper"
import FormCadastro from "./models/formCadastro.model";
import Telefone from "./models/telefone.model";

@Component(
	{
		selector: 'app-emis-form-cadastro',
		templateUrl: './emis-form-cadastro.component.html',
		styleUrls: ['./emis-form-cadastro.component.css']
	})
export class EmisFormCadastroComponent implements OnInit {

	constructor(private _cepService: CepService, private _formCadastroService: FormCadastroService) { }

	@ViewChild('form') formularioCadastro: NgForm;
	endereco: string;
	cidade: string;
	estado: string;
	loadingCEP: boolean;
	telefoneInvalido: boolean;

	maskCEP = [/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
	maskCPF = [/[0-9]/, /\d/, /\d/, '.', /[0-9]/, /\d/, /\d/, '.', /[0-9]/, /\d/, /\d/, '-', /[0-9]/, /\d/];
	maskPhone = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
	maskMobile = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

	buscarCep(cep: any) {
		cep = cep.replace(/\D/g, '');
		if (!this.cepIsValid(cep)) {
			this.formularioCadastro.controls['cep'].setErrors({ 'invalid': true });
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
				this.loadingCEP = false;

			}, (error: any) => {
				this.loadingCEP = true;
			});
	}

	cepIsValid(cep: string): boolean {
		return cep.length === 8;
	}

	onSubmit(form: NgForm) {
		let dados = new FormCadastro();
		dados.cpf = form.value.cpf.replace(/\D/g, '');
		dados.email = form.value.email;
		dados.nome = form.value.first_name;
		dados.rg = form.value.rg;
		dados.sobrenome = form.value.last_name;
		dados.endereco.cep = form.value.cep.replace(/\D/g, '');
		dados.endereco.cidade = form.value.cidade;
		dados.endereco.complemento = form.value.endereco_complemento;
		dados.endereco.endereco = form.value.endereco;
		dados.endereco.estado = form.value.estado;
		dados.endereco.numero = form.value.endereco_numero;
		dados.telefones.push(new Telefone(form.value.celular, "celular"))
		dados.telefones.push(new Telefone(form.value.foneRes, "residencia"))

		debugger;
		try {
			this._formCadastroService.inserirNovoCadastro(dados).subscribe(observe => {
				debugger;
			}, error => {
				debugger;
			});
		} catch (error) {
			debugger;
		}

	}

	CpfIsValid(cpf: number) {
		if (!validarCPF(cpf.toString().replace(/\D/g, ''))) {
			this.formularioCadastro.controls['cpf'].setErrors({ 'invalid': true });
			return false;
		}
	}

	ngOnInit() {

	}

}
