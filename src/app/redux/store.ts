import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataState {
    symbol: string;
    data: { price: number, timestamp: string }[];
}

const initialState: DataState = {
    symbol: 'GOOG',
    data: []
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData(state, action: PayloadAction<{ price: number, timestamp: string }[]>) {
            state.data = action.payload;
          },
          setSymbol(state, action: PayloadAction<string>) {
              state.symbol = action.payload;
          }
      }
  });
  
  export const { setData, setSymbol } = dataSlice.actions;
  
  const store = configureStore({
      reducer: {
          data: dataSlice.reducer
      }
  });
  
  export default store;
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  
