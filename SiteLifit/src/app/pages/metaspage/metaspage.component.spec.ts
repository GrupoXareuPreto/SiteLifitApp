import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaspageComponent } from './metaspage.component';

describe('MetaspageComponent', () => {
  let component: MetaspageComponent;
  let fixture: ComponentFixture<MetaspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetaspageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
