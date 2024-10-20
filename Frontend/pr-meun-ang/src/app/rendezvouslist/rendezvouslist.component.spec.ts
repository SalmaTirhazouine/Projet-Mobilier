import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezvouslistComponent } from './rendezvouslist.component';

describe('RendezvouslistComponent', () => {
  let component: RendezvouslistComponent;
  let fixture: ComponentFixture<RendezvouslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RendezvouslistComponent]
    });
    fixture = TestBed.createComponent(RendezvouslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
