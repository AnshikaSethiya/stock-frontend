// src/types.ts

export interface CryptoPriceResponse {
    [key: string]: {
      usd: number;
    };
  }
  
  export interface StockPriceResponse {
    'Global Quote': {
      '05. price': string;
    };
  }
  
  export interface CoinGeckoResponse {
    [key: string]: {
      usd: number;
    };
  }
  