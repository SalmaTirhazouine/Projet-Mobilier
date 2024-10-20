import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefautlistComponent } from './updatefautlist.component';

describe('UpdatefautlistComponent', () => {
  let component: UpdatefautlistComponent;
  let fixture: ComponentFixture<UpdatefautlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatefautlistComponent]
    });
    fixture = TestBed.createComponent(UpdatefautlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
