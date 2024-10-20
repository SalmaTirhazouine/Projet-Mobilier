import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortlistComponent } from './portlist.component';

describe('PortlistComponent', () => {
  let component: PortlistComponent;
  let fixture: ComponentFixture<PortlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortlistComponent]
    });
    fixture = TestBed.createComponent(PortlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
