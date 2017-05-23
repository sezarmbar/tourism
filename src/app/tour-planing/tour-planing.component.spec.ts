import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourPlaningComponent } from './tour-planing.component';

describe('TourPlaningComponent', () => {
  let component: TourPlaningComponent;
  let fixture: ComponentFixture<TourPlaningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourPlaningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourPlaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
