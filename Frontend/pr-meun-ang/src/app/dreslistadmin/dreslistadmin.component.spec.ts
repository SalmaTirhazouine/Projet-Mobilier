import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreslistadminComponent } from './dreslistadmin.component';

describe('DreslistadminComponent', () => {
  let component: DreslistadminComponent;
  let fixture: ComponentFixture<DreslistadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DreslistadminComponent]
    });
    fixture = TestBed.createComponent(DreslistadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
