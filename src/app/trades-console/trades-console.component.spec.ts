import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradesConsoleComponent } from './trades-console.component';

describe('TradesConsoleComponent', () => {
  let component: TradesConsoleComponent;
  let fixture: ComponentFixture<TradesConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradesConsoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradesConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
