import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtTradesConsoleComponent } from './bt-trades-console.component';

describe('BtTradesConsoleComponent', () => {
  let component: BtTradesConsoleComponent;
  let fixture: ComponentFixture<BtTradesConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtTradesConsoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtTradesConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
