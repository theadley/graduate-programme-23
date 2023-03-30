import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DutyControllerComponent } from './duty-controller.component';

describe('DutyControllerComponent', () => {
  let component: DutyControllerComponent;
  let fixture: ComponentFixture<DutyControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DutyControllerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DutyControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
