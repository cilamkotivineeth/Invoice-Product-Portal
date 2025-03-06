const express = require('express');
const router = express.Router();
const Invoice = require('../models/Invoice');

// Get all invoices
router.get('/', async (req, res) => {
    try {
        const invoices = await Invoice.find();
        res.status(200).json(invoices);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get invoice by ID
router.get('/:id', async (req, res) => {
    try {
        const invoice = await Invoice.findById(req.params.id);
        if (!invoice) return res.status(404).json({ message: 'Invoice not found' });
        res.status(200).json(invoice);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create a new invoice
router.post('/', async (req, res) => {
    try {
        const newInvoice = new Invoice(req.body);
        const savedInvoice = await newInvoice.save();
        res.status(201).json(savedInvoice);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update an invoice
router.put('/:id', async (req, res) => {
    try {
        const updatedInvoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedInvoice) return res.status(404).json({ message: 'Invoice not found' });
        res.status(200).json(updatedInvoice);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete an invoice
router.delete('/:id', async (req, res) => {
    try {
        const deletedInvoice = await Invoice.findByIdAndDelete(req.params.id);
        if (!deletedInvoice) return res.status(404).json({ message: 'Invoice not found' });
        res.status(200).json({ message: 'Invoice deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
