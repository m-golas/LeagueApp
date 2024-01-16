import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsLedderPageComponent } from './teams-ledder-page.component';

describe('TeamsLedderComponent', () => {
  let component: TeamsLedderPageComponent;
  let fixture: ComponentFixture<TeamsLedderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsLedderPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsLedderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
