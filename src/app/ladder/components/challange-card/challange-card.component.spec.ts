import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallangeCardComponent } from './challange-card.component';

describe('ChallangeCardComponent', () => {
  let component: ChallangeCardComponent;
  let fixture: ComponentFixture<ChallangeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallangeCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallangeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
