import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallangeDialogComponent } from './challange-dialog.component';

describe('ChallangeDialogComponent', () => {
  let component: ChallangeDialogComponent;
  let fixture: ComponentFixture<ChallangeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallangeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallangeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
