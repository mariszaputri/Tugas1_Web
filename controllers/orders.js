const Order = require('../models/Order')

module.exports = {
    index: async (req, res) => {
        try {
            const orders = await Order.find().populate('product')
            res.status(200).json({
                status: true,
                data: orders
            })
        } catch (error) {
            res.status(400).json({ success: false, message: error.message })
        }
    },

    show: async (req, res) => {
        try {
            const order = await Order.findById(req.params.id).populate('product')
            res.status(200).json({
                status: true,
                data: order
            })
        } catch (error) {
            res.status(400).json({ success: false, message: error.message })
        }
    },

    store: async (req, res) => {
        try {
            const order = await Order.create(req.body)
            res.status(201).json({
                status: true,
                data: order,
                message: "Order berhasil ditambahkan"
            })
        } catch (error) {
            res.status(400).json({ success: false, message: error.message })
        }
    },

    update: async (req, res) => {
        try {
            const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.status(200).json({
                status: true,
                data: order,
                message: "Order berhasil diperbarui"
            })
        } catch (error) {
            res.status(400).json({ success: false, message: error.message })
        }
    },

    delete: async (req, res) => {
        try {
            await Order.findByIdAndDelete(req.params.id)
            res.status(200).json({
                status: true,
                message: "Order berhasil dihapus"
            })
        } catch (error) {
            res.status(400).json({ success: false, message: error.message })
        }
    }
}
