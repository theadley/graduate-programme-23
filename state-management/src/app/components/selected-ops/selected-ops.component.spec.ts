import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedOpsComponent } from './selected-ops.component';

describe('SelectedOpsComponent', () => {
  let component: SelectedOpsComponent;
  let fixture: ComponentFixture<SelectedOpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedOpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
