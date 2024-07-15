

import axios from 'axios';
import dotenv from 'dotenv';
import StockPrice from '../models/StockPrice';
import { CoinGeckoResponse } from "../types";

dotenv.config();


const fetchAndStoreData = async () => {
  try {
    const response = await axios.get<CoinGeckoResponse>('https://api.coingecko.com/api/v3/simple/price', {
      params: {
        ids: 'bitcoin,ethereum,ripple,litecoin,bitcoin-cash',
        vs_currencies: 'usd',
      },
    });
    const data = response.data;
    // console.log("data received: ", data)

    for (const [symbol, value] of Object.entries(data)) {
      const priceData = new StockPrice({
        symbol,
        price: value.usd,
      });
      await priceData.save();
    }

    console.log('Data saved to MongoDB');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const startPolling = () => {
  setInterval(async () => {
   fetchAndStoreData()
  }, 5000); // Poll every 5 seconds
};
