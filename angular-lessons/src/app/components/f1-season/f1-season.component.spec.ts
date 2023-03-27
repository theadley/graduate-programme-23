import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F1SeasonComponent } from './f1-season.component';

describe('F1SeasonComponent', () => {
  let component: F1SeasonComponent;
  let fixture: ComponentFixture<F1SeasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ F1SeasonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F1SeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
