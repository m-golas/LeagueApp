import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaddersToggleComponent } from './ladders-toggle.component';

describe('LaddersToggleComponent', () => {
  let component: LaddersToggleComponent;
  let fixture: ComponentFixture<LaddersToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaddersToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaddersToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
