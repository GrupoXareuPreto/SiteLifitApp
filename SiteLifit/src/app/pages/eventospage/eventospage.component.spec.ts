import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventospageComponent } from './eventospage.component';

describe('EventospageComponent', () => {
  let component: EventospageComponent;
  let fixture: ComponentFixture<EventospageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventospageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventospageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
