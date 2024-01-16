import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingMatchesComponent } from './incoming-matches.component';

describe('IncomingMatchesComponent', () => {
  let component: IncomingMatchesComponent;
  let fixture: ComponentFixture<IncomingMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomingMatchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomingMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
