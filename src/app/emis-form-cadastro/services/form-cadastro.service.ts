import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import FormCadastro from "../models/formCadastro.model";

@Injectable()
export class FormCadastroService {

  constructor(private db: AngularFireDatabase) { }

  inserirNovoCadastro(dados: FormCadastro): Observable<any> {
    return new Observable<any>(observe => {
      const usuarios = this.db.database.ref(`usuarios/${dados.cpf}`);
      usuarios.set(dados).then(x => {
        return new Observable(function (observer) {
          observer.next("Usuário Cadastrado com sucesso!");
          observer.complete();
        });
      }).catch(error => {
        observe.error(error);
      });
    })
  }
}


