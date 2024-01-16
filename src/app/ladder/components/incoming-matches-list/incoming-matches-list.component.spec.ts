import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingMatchesListComponent } from './incoming-matches-list.component';

describe('IncomingMatchesListComponent', () => {
  let component: IncomingMatchesListComponent;
  let fixture: ComponentFixture<IncomingMatchesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomingMatchesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomingMatchesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
