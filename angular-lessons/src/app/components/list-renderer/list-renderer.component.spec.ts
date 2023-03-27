import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRendererComponent } from './list-renderer.component';

describe('ListRendererComponent', () => {
  let component: ListRendererComponent;
  let fixture: ComponentFixture<ListRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
