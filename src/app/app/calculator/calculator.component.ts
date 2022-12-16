import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-services.service';
import { CurrencyBRL, LastCurrencyUpdate } from '../DTOs/currency.type';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  
  userValue!: number;
  todayQuotation!:CurrencyBRL;
  result!: number;

  constructor(
    private _service: ApiService,
  ){}

  ngOnInit(): void {
    this.brlQuotation();
  }

  brlQuotation(){
    this._service.getQuotationUSD()
      .subscribe({
        next: (result:any) => {
          this.todayQuotation = result.USDBRL;
          console.log(this.todayQuotation);
        },
        error: () => {
          console.log('Erro ao baixar as informações da api');
        }
      });
  }

  calculate(){
    let quotation = this.todayQuotation.bid;
    let value = this.userValue;
    return this.result = quotation * value;
  }

  reset(){
    this.result = 0;
  }
}
