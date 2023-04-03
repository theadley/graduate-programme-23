import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverResultComponent } from './driver-result.component';

describe('DriverResultComponent', () => {
  let component: DriverResultComponent;
  let fixture: ComponentFixture<DriverResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
