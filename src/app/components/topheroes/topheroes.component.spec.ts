import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopheroesComponent } from './topheroes.component';

describe('TopheroesComponent', () => {
  let component: TopheroesComponent;
  let fixture: ComponentFixture<TopheroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopheroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
