import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormpersonComponent } from './formperson.component';

describe('FormpersonComponent', () => {
  let component: FormpersonComponent;
  let fixture: ComponentFixture<FormpersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormpersonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
