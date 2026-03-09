import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vinilos } from './vinilos';

describe('Vinilos', () => {
  let component: Vinilos;
  let fixture: ComponentFixture<Vinilos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vinilos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vinilos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
