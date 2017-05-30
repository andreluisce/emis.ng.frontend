import Telefone from "./telefone.model";
import Endereco from "./endereco.model";

export default class FormCadastro {
    nome: string;
    sobrenome: string;
    rg: string;
    cpf: string;
    email: string;
    telefones: Array<Telefone> = new Array<Telefone>();
    endereco: Endereco = new Endereco();
    dataCadastro: Date = new Date();
}

