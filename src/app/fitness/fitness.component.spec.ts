import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessComponent } from './fitness.component';

describe('FitnessComponent', () => {
  let component: FitnessComponent;
  let fixture: ComponentFixture<FitnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
