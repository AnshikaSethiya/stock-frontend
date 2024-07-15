import cors from 'cors';
import express from 'express';
import { startPolling } from './controller/stockController';
import connectDB from './database';
import stockRoutes from './routes/stockRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
startPolling();

app.use(cors());
app.use(express.json());
app.use('/api/stocks', stockRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
