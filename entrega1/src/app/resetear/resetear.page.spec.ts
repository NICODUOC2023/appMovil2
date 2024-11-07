import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResetearPage } from './resetear.page';

describe('ResetearPage', () => {
  let component: ResetearPage;
  let fixture: ComponentFixture<ResetearPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
