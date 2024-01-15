import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallaneDetailsDialogComponent } from './challane-details-dialog.component';

describe('ChallaneDetailsDialogComponent', () => {
  let component: ChallaneDetailsDialogComponent;
  let fixture: ComponentFixture<ChallaneDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallaneDetailsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallaneDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
