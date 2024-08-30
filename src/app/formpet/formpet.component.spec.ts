import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormpetComponent } from './formpet.component';

describe('FormpetComponent', () => {
  let component: FormpetComponent;
  let fixture: ComponentFixture<FormpetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormpetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
