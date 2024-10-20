import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BardlistComponent } from './bardlist.component';

describe('BardlistComponent', () => {
  let component: BardlistComponent;
  let fixture: ComponentFixture<BardlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BardlistComponent]
    });
    fixture = TestBed.createComponent(BardlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
