import { Component, OnInit } from '@angular/core';
import { RoninService } from '../ronin.service';

@Component({
  selector: 'app-erc20-transactions',
  templateUrl: './erc20-transactions.component.html',
  styleUrls: ['./erc20-transactions.component.scss']
})
export class Erc20TransactionsComponent implements OnInit {
  public data: any = {}

  constructor(private ronin_service: RoninService) { }

  ngOnInit(): void {

    this.ronin_service.get_erc20_transaction().subscribe(data => {
      this.data = data;
    })


  }
}
