import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FautlistComponent } from './fautlist.component';

describe('FautlistComponent', () => {
  let component: FautlistComponent;
  let fixture: ComponentFixture<FautlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FautlistComponent]
    });
    fixture = TestBed.createComponent(FautlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
