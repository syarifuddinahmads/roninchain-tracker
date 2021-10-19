import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TransactionsComponent } from './transactions/transactions.component';
import { Erc20TransactionsComponent } from './erc20-transactions/erc20-transactions.component';
import { Erc721TransactionsComponent } from './erc721-transactions/erc721-transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    Erc20TransactionsComponent,
    Erc721TransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
