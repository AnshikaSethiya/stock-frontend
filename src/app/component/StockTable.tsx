import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getPriceData } from "../actions/priceActions";
import { AppDispatch, RootState } from "../store";

// Styled components
const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Select = styled.select`
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #f4f4f4;
  padding: 10px;
  border: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const StockTable: React.FC = () => {
  const [symbol, setSymbol] = useState("bitcoin");
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.priceData
  );

  useEffect(() => {
    dispatch(getPriceData(symbol));
  }, [dispatch, symbol]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error}</p>;

  return (
    <Container>
      <Select onChange={(e) => setSymbol(e.target.value)} value={symbol}>
        <option value="bitcoin">Bitcoin</option>
        <option value="ethereum">Ethereum</option>
        <option value="ripple">Ripple</option>
        <option value="litecoin">Litecoin</option>
        <option value="bitcoin-cash">Bitcoin Cash</option>
      </Select>
      <Table>
        <thead>
          <tr>
            <Th>Symbol</Th>
            <Th>Price</Th>
            <Th>Timestamp</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <Td>{item.symbol}</Td>
              <Td>{item.price}</Td>
              <Td>{new Date(item.timestamp).toLocaleString()}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default StockTable;
