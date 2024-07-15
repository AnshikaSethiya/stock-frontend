import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const API_URL = 'http://localhost:5000/api/stocks';

export const getPriceData = createAsyncThunk('priceData/getPriceData', async (symbol: string) => {
  const response = await axios.get(`${API_URL}/${symbol}`);
  return response.data;
});
