import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareStateRxjsComponent } from './share-state-rxjs.component';

describe('ShareStateRxjsComponent', () => {
  let component: ShareStateRxjsComponent;
  let fixture: ComponentFixture<ShareStateRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareStateRxjsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareStateRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
