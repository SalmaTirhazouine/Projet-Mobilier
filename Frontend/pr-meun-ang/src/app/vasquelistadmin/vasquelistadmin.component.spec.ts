import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VasquelistadminComponent } from './vasquelistadmin.component';

describe('VasquelistadminComponent', () => {
  let component: VasquelistadminComponent;
  let fixture: ComponentFixture<VasquelistadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VasquelistadminComponent]
    });
    fixture = TestBed.createComponent(VasquelistadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
