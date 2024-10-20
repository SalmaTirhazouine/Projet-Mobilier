import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuilistComponent } from './cuilist.component';

describe('CuilistComponent', () => {
  let component: CuilistComponent;
  let fixture: ComponentFixture<CuilistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuilistComponent]
    });
    fixture = TestBed.createComponent(CuilistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
