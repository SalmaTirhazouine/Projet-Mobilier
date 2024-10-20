import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FautlistadminComponent } from './fautlistadmin.component';

describe('FautlistadminComponent', () => {
  let component: FautlistadminComponent;
  let fixture: ComponentFixture<FautlistadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FautlistadminComponent]
    });
    fixture = TestBed.createComponent(FautlistadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
