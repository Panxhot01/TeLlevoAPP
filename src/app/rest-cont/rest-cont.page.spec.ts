import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestContPage } from './rest-cont.page';

describe('RestContPage', () => {
  let component: RestContPage;
  let fixture: ComponentFixture<RestContPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RestContPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
