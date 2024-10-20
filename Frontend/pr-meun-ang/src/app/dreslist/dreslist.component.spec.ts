import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreslistComponent } from './dreslist.component';

describe('DreslistComponent', () => {
  let component: DreslistComponent;
  let fixture: ComponentFixture<DreslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DreslistComponent]
    });
    fixture = TestBed.createComponent(DreslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
