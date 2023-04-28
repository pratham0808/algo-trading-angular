import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradesExecutedTableComponent } from './trades-executed-table.component';

describe('TradesExecutedTableComponent', () => {
  let component: TradesExecutedTableComponent;
  let fixture: ComponentFixture<TradesExecutedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradesExecutedTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradesExecutedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
