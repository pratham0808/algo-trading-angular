import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsTableComponent } from './signals-table.component';

describe('SignalsTableComponent', () => {
  let component: SignalsTableComponent;
  let fixture: ComponentFixture<SignalsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
