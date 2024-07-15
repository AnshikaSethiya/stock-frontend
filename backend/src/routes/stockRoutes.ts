import { Router } from 'express';
import StockPrice from '../models/StockPrice';

const router = Router();

// Fetch the most recent 20 entries for a given symbol
router.get('/:symbol', async (req, res) => {
  try {
    const { symbol } = req.params;
    const data = await StockPrice.find({ symbol }).sort({ timestamp: -1 }).limit(20);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error });
  }
});

export default router;
