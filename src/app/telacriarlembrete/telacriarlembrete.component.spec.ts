import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelacriarlembreteComponent } from './telacriarlembrete.component';

describe('TelacriarlembreteComponent', () => {
  let component: TelacriarlembreteComponent;
  let fixture: ComponentFixture<TelacriarlembreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelacriarlembreteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelacriarlembreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
