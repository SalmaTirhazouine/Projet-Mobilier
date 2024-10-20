import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamblistadminComponent } from './chamblistadmin.component';

describe('ChamblistadminComponent', () => {
  let component: ChamblistadminComponent;
  let fixture: ComponentFixture<ChamblistadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChamblistadminComponent]
    });
    fixture = TestBed.createComponent(ChamblistadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
