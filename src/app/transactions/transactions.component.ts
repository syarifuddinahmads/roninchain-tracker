import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RoninService } from '../ronin.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {


  public data: any = {}

  constructor(private ronin_service: RoninService) { }

  ngOnInit(): void {

    this.ronin_service.get_transaction().subscribe(data => {
      this.data = data;
    })


  }

}
