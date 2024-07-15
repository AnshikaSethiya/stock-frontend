import { configureStore } from '@reduxjs/toolkit';
import priceReducer from './reducer/priceReducer';

const store = configureStore({
  reducer: {
    priceData: priceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
