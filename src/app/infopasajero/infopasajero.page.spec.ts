import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfopasajeroPage } from './infopasajero.page';

describe('InfopasajeroPage', () => {
  let component: InfopasajeroPage;
  let fixture: ComponentFixture<InfopasajeroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfopasajeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
