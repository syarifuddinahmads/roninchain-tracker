import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Erc721TransactionsComponent } from './erc721-transactions.component';

describe('Erc721TransactionsComponent', () => {
  let component: Erc721TransactionsComponent;
  let fixture: ComponentFixture<Erc721TransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Erc721TransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Erc721TransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
