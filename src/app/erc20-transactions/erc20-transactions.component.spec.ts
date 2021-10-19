import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Erc20TransactionsComponent } from './erc20-transactions.component';

describe('Erc20TransactionsComponent', () => {
  let component: Erc20TransactionsComponent;
  let fixture: ComponentFixture<Erc20TransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Erc20TransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Erc20TransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
