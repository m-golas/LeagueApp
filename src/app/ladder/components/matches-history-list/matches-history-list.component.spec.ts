import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesHistoryListComponent } from './matches-history-list.component';

describe('MatchesHistoryListComponent', () => {
  let component: MatchesHistoryListComponent;
  let fixture: ComponentFixture<MatchesHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchesHistoryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchesHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
