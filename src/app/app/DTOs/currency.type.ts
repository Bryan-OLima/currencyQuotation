export interface LastCurrencyUpdate {
USDBRL: Array<CurrencyBRL>;
}

export interface CurrencyBRL {
    code: string;
    codein: string;
    name: string;
    high: number;
    low: number;
    varBid: number;
    bid: number;
    ask: number;
    timestamp: number;
    create_date: string;
}