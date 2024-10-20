import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VasquelistComponent } from './vasquelist.component';

describe('VasquelistComponent', () => {
  let component: VasquelistComponent;
  let fixture: ComponentFixture<VasquelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VasquelistComponent]
    });
    fixture = TestBed.createComponent(VasquelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
