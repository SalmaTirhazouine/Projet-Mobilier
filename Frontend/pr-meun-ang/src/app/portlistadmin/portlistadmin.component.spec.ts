import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortlistadminComponent } from './portlistadmin.component';

describe('PortlistadminComponent', () => {
  let component: PortlistadminComponent;
  let fixture: ComponentFixture<PortlistadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortlistadminComponent]
    });
    fixture = TestBed.createComponent(PortlistadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
