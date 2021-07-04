import mongoose from 'mongoose';

const StockSchema = new mongoose.Schema(
    {}
)

export const Stock = mongoose.model('stock', StockSchema)