// src/pages/index.tsx
import React from "react";
import ContLayout from "./component/ContLayout";
import StockTable from "./component/StockTable";

const HomePage: React.FC = () => {
  return (
    <ContLayout>
      <h1>Stock and Crypto Prices</h1>
      <StockTable />
    </ContLayout>
  );
};

export default HomePage;
