// src/components/StockTable/StockTable.tsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { API_BASE_URL, POLLING_INTERVAL } from "../../../config";
import { selectStockData, setStockData } from "../../redux/stockSlice";
import axiosInstance from "../../utils/axiosInstance";
import StockRow from "./StockRow";

const Container = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Select = styled.select`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Table = styled.table`
  width: 80%;
  border-collapse: collapse;
  display: flex;

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

const StockTable = () => {
  const [symbol, setSymbol] = useState("bitcoin");
  const dispatch = useDispatch();
  //const { data, loading, error } = useSelector((state: RootState) => state.priceData);
  const stockData = useSelector(selectStockData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(`${API_BASE_URL}/api/stocks/GOOG`);
        const response = await axiosInstance.get(
          `${API_BASE_URL}/api/stocks/${symbol}`
        );
        dispatch(setStockData(response.data));
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, POLLING_INTERVAL);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    // <table>
    //   <thead>
    //     <tr>
    //       <th>Symbol</th>
    //       <th>Price</th>
    //       <th>Timestamp</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {stockData.map((stock) => (
    //       <StockRow key={stock.timestamp} stock={stock} />
    //     ))}
    //   </tbody>
    // </table>
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
            <th>Symbol</th>
            <th>Price</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((item) => (
            <StockRow stock={item} key={item.timestamp} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default StockTable;
