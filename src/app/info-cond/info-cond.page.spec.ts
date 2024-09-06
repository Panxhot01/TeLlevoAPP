import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoCondPage } from './info-cond.page';

describe('InfoCondPage', () => {
  let component: InfoCondPage;
  let fixture: ComponentFixture<InfoCondPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCondPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
