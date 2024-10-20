import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonlistadminComponent } from './salonlistadmin.component';

describe('SalonlistadminComponent', () => {
  let component: SalonlistadminComponent;
  let fixture: ComponentFixture<SalonlistadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalonlistadminComponent]
    });
    fixture = TestBed.createComponent(SalonlistadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
