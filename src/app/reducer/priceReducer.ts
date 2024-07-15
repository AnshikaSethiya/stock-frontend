import { createSlice } from '@reduxjs/toolkit';
import { getPriceData } from '../actions/priceActions';

interface PriceDataState {
  data: any[];
  loading: boolean;
  error?: string;
}

const initialState: PriceDataState = {
  data: [],
  loading: false,
  error: undefined,
};

const priceDataSlice = createSlice({
  name: 'priceData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPriceData.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(getPriceData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getPriceData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default priceDataSlice.reducer;
