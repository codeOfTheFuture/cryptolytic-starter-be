const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TradingSchema = new Schema(
  {
    exchange: {
      type: String
    },
    trading_pair: {
      type: String
    },
    trade_time: {
      type: Number
    },
    period: {
      type: Number
    },
    percentage: {
      type: Number
    },
    trading_price: {
      type: Number
    }
  },
  { strict: false }
);

module.exports = Trade = mongoose.model("trading", TradingSchema);
