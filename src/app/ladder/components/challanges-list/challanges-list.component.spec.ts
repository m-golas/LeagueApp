import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallangesListComponent } from './challanges-list.component';

describe('ChallangesListComponent', () => {
  let component: ChallangesListComponent;
  let fixture: ComponentFixture<ChallangesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallangesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallangesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
