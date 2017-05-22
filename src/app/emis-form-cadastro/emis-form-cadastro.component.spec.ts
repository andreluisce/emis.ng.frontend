import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmisFormCadastroComponent } from './emis-form-cadastro.component';

describe('EmisFormCadastroComponent', () => {
  let component: EmisFormCadastroComponent;
  let fixture: ComponentFixture<EmisFormCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmisFormCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmisFormCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
