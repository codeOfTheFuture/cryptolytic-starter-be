const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArbitrageSchema = new Schema(
  {
    buy_exchange: {
      type: String
    },
    sell_exchange: {
      type: String
    },
    trading_pair: {
      type: String
    },
    arbitrage_percentage: {
      type: Number
    },
    trade_time: {
      type: Number
    },
    price_difference: {
      type: Number
    }
  },
  { strict: false }
);

module.exports = Arbitrage = mongoose.model("arbitrage", ArbitrageSchema);
