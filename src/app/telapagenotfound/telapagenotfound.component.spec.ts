import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelapagenotfoundComponent } from './telapagenotfound.component';

describe('TelapagenotfoundComponent', () => {
  let component: TelapagenotfoundComponent;
  let fixture: ComponentFixture<TelapagenotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelapagenotfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelapagenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
