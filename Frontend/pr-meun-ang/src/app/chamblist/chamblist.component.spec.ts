import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamblistComponent } from './chamblist.component';

describe('ChamblistComponent', () => {
  let component: ChamblistComponent;
  let fixture: ComponentFixture<ChamblistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChamblistComponent]
    });
    fixture = TestBed.createComponent(ChamblistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
