import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagempageComponent } from './postagempage.component';

describe('PostagempageComponent', () => {
  let component: PostagempageComponent;
  let fixture: ComponentFixture<PostagempageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostagempageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostagempageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
