import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoConductorPage } from './info-conductor.page';

describe('InfoConductorPage', () => {
  let component: InfoConductorPage;
  let fixture: ComponentFixture<InfoConductorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoConductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
