import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoninService {

  private API = environment.api;
  private RONIN_TOKEN = environment.roninchain;
  constructor(private http_client: HttpClient) { }

  public get_transaction() {
    return this.http_client.get(this.API + 'txs/' + this.RONIN_TOKEN);
  }

  public get_erc20_transaction() {
    return this.http_client.get(this.API + 'tokentxs?addr=' + this.RONIN_TOKEN + '&token=ERC20');
  }

  public get_erc721_transaction() {
    return this.http_client.get(this.API + 'tokentxs?addr=' + this.RONIN_TOKEN + '&token=ERC721');
  }

}
