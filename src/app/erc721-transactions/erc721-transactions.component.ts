import { Component, OnInit } from '@angular/core';
import { RoninService } from '../ronin.service';

@Component({
  selector: 'app-erc721-transactions',
  templateUrl: './erc721-transactions.component.html',
  styleUrls: ['./erc721-transactions.component.scss']
})
export class Erc721TransactionsComponent implements OnInit {

  public data: any = {}

  constructor(private ronin_service: RoninService) { }

  ngOnInit(): void {

    this.ronin_service.get_erc721_transaction().subscribe(data => {
      this.data = data;
    })


  }

}
