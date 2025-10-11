import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosfotoComponent } from './eventosfoto.component';

describe('EventosfotoComponent', () => {
  let component: EventosfotoComponent;
  let fixture: ComponentFixture<EventosfotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventosfotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosfotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
