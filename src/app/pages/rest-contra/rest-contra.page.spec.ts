import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestContraPage } from './rest-contra.page';

describe('RestContraPage', () => {
  let component: RestContraPage;
  let fixture: ComponentFixture<RestContraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RestContraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
