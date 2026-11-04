import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainHosting } from './domain-hosting';

describe('DomainHosting', () => {
  let component: DomainHosting;
  let fixture: ComponentFixture<DomainHosting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomainHosting],
    }).compileComponents();

    fixture = TestBed.createComponent(DomainHosting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
