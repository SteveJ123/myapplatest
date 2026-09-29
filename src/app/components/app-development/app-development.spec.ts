import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDevelopment } from './app-development';

describe('AppDevelopment', () => {
  let component: AppDevelopment;
  let fixture: ComponentFixture<AppDevelopment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDevelopment],
    }).compileComponents();

    fixture = TestBed.createComponent(AppDevelopment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
