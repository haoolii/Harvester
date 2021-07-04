import mongoose from 'mongoose';

const ExchangeReportSchema = new mongoose.Schema(
    {       
        股票代號: String,
        日期: Date,
        成交股數: Number,
        成交金額: Number,
        開盤價: Number,
        最高價: Number,
        最低價: Number,
        收盤價: Number,
        漲跌價差: Number,
        成交筆數: Number
    },
    { timestamps: true }
)

ExchangeReportSchema.index({ 股票代號: 1, 日期: 1 }, { unique: true })

export const ExchangeReport = mongoose.model('exchangeReport', ExchangeReportSchema)