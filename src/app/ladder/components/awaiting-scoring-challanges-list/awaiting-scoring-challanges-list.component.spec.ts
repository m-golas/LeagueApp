import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwaitingScoringChallangesListComponent } from './awaiting-scoring-challanges-list.component';

describe('AwaitingScoringChallangesListComponent', () => {
  let component: AwaitingScoringChallangesListComponent;
  let fixture: ComponentFixture<AwaitingScoringChallangesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwaitingScoringChallangesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwaitingScoringChallangesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
