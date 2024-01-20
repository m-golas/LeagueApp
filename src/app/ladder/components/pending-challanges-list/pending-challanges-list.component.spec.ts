import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingChallangesListComponent } from './pending-challanges-list.component';

describe('PendingChallangesListComponent', () => {
  let component: PendingChallangesListComponent;
  let fixture: ComponentFixture<PendingChallangesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingChallangesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingChallangesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
