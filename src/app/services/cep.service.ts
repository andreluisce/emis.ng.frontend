import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";

import {Cep} from "app/models/cep.model";

@Injectable()
export class CepService {

  constructor(private _con : Http) {}

  getCEP(cep:string) : Observable < Cep > {
    try {
      return new Observable < Cep > ((observer : any) => {
        this
          ._con
          .get(`https://viacep.com.br/ws/${cep}/json/`)
          .map(this.mapResultCep)
          .subscribe((_cep : Cep) => {
            observer.next(_cep);
            observer.complete();
          })
      })
    } catch (error) {}
  }

  private mapResultCep(res : Response) : Cep {
    let cep: any = res.json();

    return cep
}
}
