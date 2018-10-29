import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleDAttenteComponent } from './salle-d-attente.component';

describe('SalleDAttenteComponent', () => {
  let component: SalleDAttenteComponent;
  let fixture: ComponentFixture<SalleDAttenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalleDAttenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalleDAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
