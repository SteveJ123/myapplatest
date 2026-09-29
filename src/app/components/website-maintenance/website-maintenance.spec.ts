import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteMaintenance } from './website-maintenance';

describe('WebsiteMaintenance', () => {
  let component: WebsiteMaintenance;
  let fixture: ComponentFixture<WebsiteMaintenance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteMaintenance],
    }).compileComponents();

    fixture = TestBed.createComponent(WebsiteMaintenance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
