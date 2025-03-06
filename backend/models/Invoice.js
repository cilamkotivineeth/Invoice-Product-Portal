const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    storeName: { type: String, required: true },
    orderId: { type: String, required: true },
    orderDate: { type: Date, required: true },
    quantity: { type: Number, required: true },
    regularPrice: { type: Number, required: true },
    dealPrice: { type: Number, required: true },
    itemTotal: { type: Number, required: true },
    itemTax: { type: Number, required: true },
    grandTotalWithoutTax: { type: Number, required: true },
    grandTotalWithTax: { type: Number, required: true },
    paymentStatus: { type: String, enum: ['Pending', 'Paid'], default: 'Pending' }
});

module.exports = mongoose.model('Invoice', invoiceSchema);