import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolveChallangeDialogComponent } from './resolve-challange-dialog.component';

describe('ResolveChallangeDialogComponent', () => {
  let component: ResolveChallangeDialogComponent;
  let fixture: ComponentFixture<ResolveChallangeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolveChallangeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolveChallangeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
