import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmisInfoComponent } from './emis-info.component';

describe('EmisInfoComponent', () => {
  let component: EmisInfoComponent;
  let fixture: ComponentFixture<EmisInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmisInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmisInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
