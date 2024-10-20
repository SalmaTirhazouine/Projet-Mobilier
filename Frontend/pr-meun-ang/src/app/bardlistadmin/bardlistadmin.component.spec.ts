import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BardlistadminComponent } from './bardlistadmin.component';

describe('BardlistadminComponent', () => {
  let component: BardlistadminComponent;
  let fixture: ComponentFixture<BardlistadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BardlistadminComponent]
    });
    fixture = TestBed.createComponent(BardlistadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
