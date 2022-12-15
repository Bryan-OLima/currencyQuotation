import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _apiUrl = ' https://economia.awesomeapi.com.br/';
  private _lastUpdate = 'last/';
  private _currencyUSDtoBRL = 'USD-BRL/';
  private _currencyEURtoBRL = 'EUR-BRL';
  private _currencyBTCtoBRL = 'BTC-BRL';
  
  constructor(
    public httpclient: HttpClient,
  ) { }

getQuotationUSD(){
  return this.httpclient.get<any>(`${this._apiUrl}${this._lastUpdate}${this._currencyUSDtoBRL}`);
}

getQuotationEUR(){
  return this.httpclient.get<any>(`${this._apiUrl}${this._lastUpdate}${this._currencyEURtoBRL}`);
}

getQuotationBTC(){
  return this.httpclient.get<any>(`${this._apiUrl}${this._lastUpdate}${this._currencyBTCtoBRL}`);
}
}
