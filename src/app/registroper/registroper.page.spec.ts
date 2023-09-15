import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroperPage } from './registroper.page';

describe('RegistroperPage', () => {
  let component: RegistroperPage;
  let fixture: ComponentFixture<RegistroperPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
