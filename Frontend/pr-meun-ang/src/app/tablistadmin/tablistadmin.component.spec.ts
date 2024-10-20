import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablistadminComponent } from './tablistadmin.component';

describe('TablistadminComponent', () => {
  let component: TablistadminComponent;
  let fixture: ComponentFixture<TablistadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablistadminComponent]
    });
    fixture = TestBed.createComponent(TablistadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
