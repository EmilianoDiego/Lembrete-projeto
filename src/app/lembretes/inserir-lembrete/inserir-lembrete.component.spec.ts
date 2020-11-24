import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirLembreteComponent } from './inserir-lembrete.component';

describe('InserirLembreteComponent', () => {
  let component: InserirLembreteComponent;
  let fixture: ComponentFixture<InserirLembreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirLembreteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirLembreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
