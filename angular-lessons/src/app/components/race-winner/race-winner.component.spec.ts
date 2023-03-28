import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceWinnerComponent } from './race-winner.component';

describe('RaceWinnerComponent', () => {
  let component: RaceWinnerComponent;
  let fixture: ComponentFixture<RaceWinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceWinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaceWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
