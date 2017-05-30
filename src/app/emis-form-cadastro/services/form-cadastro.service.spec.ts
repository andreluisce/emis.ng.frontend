import { TestBed, inject } from '@angular/core/testing';

import { FormCadastroServiceService } from './form-cadastro-service.service';

describe('FormCadastroServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormCadastroServiceService]
    });
  });

  it('should be created', inject([FormCadastroServiceService], (service: FormCadastroServiceService) => {
    expect(service).toBeTruthy();
  }));
});
