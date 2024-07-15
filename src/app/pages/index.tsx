import React from "react";
import { Provider } from "react-redux";
import StockTable from "../component/StockTable";
import store from "../store";

const Home: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Stock Price Tracker</h1>
        <StockTable />
      </div>
    </Provider>
  );
};

export default Home;
