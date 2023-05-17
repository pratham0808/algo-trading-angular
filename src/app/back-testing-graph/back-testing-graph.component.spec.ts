import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackTestingGraphComponent } from './back-testing-graph.component';

describe('BackTestingGraphComponent', () => {
  let component: BackTestingGraphComponent;
  let fixture: ComponentFixture<BackTestingGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackTestingGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackTestingGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
