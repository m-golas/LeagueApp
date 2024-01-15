import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesAwaitingScoringComponent } from './matches-awaiting-scoring.component';

describe('MatchesAwaitingScoringComponent', () => {
  let component: MatchesAwaitingScoringComponent;
  let fixture: ComponentFixture<MatchesAwaitingScoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchesAwaitingScoringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchesAwaitingScoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
