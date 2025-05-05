import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoueuPage } from './soueu.page';

describe('SoueuPage', () => {
  let component: SoueuPage;
  let fixture: ComponentFixture<SoueuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SoueuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
