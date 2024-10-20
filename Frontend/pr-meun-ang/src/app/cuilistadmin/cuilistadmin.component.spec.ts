import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuilistadminComponent } from './cuilistadmin.component';

describe('CuilistadminComponent', () => {
  let component: CuilistadminComponent;
  let fixture: ComponentFixture<CuilistadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuilistadminComponent]
    });
    fixture = TestBed.createComponent(CuilistadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
