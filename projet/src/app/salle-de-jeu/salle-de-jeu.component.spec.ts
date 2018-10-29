import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleDeJeuComponent } from './salle-de-jeu.component';

describe('SalleDeJeuComponent', () => {
  let component: SalleDeJeuComponent;
  let fixture: ComponentFixture<SalleDeJeuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalleDeJeuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalleDeJeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
