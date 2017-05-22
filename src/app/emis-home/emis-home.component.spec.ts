import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmisHomeComponent } from './emis-home.component';

describe('EmisHomeComponent', () => {
  let component: EmisHomeComponent;
  let fixture: ComponentFixture<EmisHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmisHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmisHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
