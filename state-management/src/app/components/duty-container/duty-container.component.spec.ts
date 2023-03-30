import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DutyContainerComponent } from './duty-container.component';

describe('DutyContainerComponent', () => {
  let component: DutyContainerComponent;
  let fixture: ComponentFixture<DutyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DutyContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DutyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
