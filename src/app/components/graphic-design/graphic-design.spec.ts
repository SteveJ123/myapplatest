import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicDesign } from './graphic-design';

describe('GraphicDesign', () => {
  let component: GraphicDesign;
  let fixture: ComponentFixture<GraphicDesign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicDesign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicDesign);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
