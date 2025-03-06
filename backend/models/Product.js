const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    storeName: { type: String, required: true },
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    category: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);