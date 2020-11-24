import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelalembreteComponent } from './telalembrete.component';

describe('TelalembreteComponent', () => {
  let component: TelalembreteComponent;
  let fixture: ComponentFixture<TelalembreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelalembreteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelalembreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
