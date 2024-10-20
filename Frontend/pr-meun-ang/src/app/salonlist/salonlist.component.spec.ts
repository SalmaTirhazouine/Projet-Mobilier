import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonlistComponent } from './salonlist.component';

describe('SalonlistComponent', () => {
  let component: SalonlistComponent;
  let fixture: ComponentFixture<SalonlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalonlistComponent]
    });
    fixture = TestBed.createComponent(SalonlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
