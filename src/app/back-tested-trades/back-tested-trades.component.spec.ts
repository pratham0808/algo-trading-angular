import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackTestedTradesComponent } from './back-tested-trades.component';

describe('BackTestedTradesComponent', () => {
  let component: BackTestedTradesComponent;
  let fixture: ComponentFixture<BackTestedTradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackTestedTradesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackTestedTradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
