import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurpleComponent } from './purple.component';

describe('PurpleComponent', () => {
  let component: PurpleComponent;
  let fixture: ComponentFixture<PurpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
