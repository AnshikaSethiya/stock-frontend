
// src/redux/slices/stockSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface StockState {
  data: { symbol: string; price: number; timestamp: string }[];
  selectedSymbol: string;
}

const initialState: StockState = {
  data: [],
  selectedSymbol: 'GOOG',
};

const stockSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {
    setStockData(state, action: PayloadAction<StockState['data']>) {
      state.data = action.payload;
    },
    setSelectedSymbol(state, action: PayloadAction<string>) {
      state.selectedSymbol = action.payload;
    },
  },
});

export const { setStockData, setSelectedSymbol } = stockSlice.actions;

export const selectStockData = (state: RootState) => state.stocks.data;
export const selectSelectedSymbol = (state: RootState) => state.stocks.selectedSymbol;

export default stockSlice.reducer;
