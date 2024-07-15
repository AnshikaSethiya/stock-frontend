// src/components/StockTable/StockRow.tsx
import React from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f9f9f9;
  }
`;

interface StockRowProps {
  stock: { symbol: string; price: number; timestamp: string };
}

const StockRow: React.FC<StockRowProps> = ({ stock }) => {
  return (
    <tr>
      <td>{stock.symbol}</td>
      <td>{stock.price}</td>
      <td>{new Date(stock.timestamp).toLocaleString()}</td>
    </tr>
  );
};

export default StockRow;
