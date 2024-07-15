import mongoose from 'mongoose';

const PriceDataSchema = new mongoose.Schema({
  symbol: String,
  price: Number,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('PriceData', PriceDataSchema);
