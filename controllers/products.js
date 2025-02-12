const Product = require('../models/Product')

module.exports = {
    index: async (req, res) => {
        try {
            const products = await Product.find()
            res.status(200).json({
                status: true,
                data: products
            })
        } catch (error) {
            res.status(400).json({ success: false, message: error.message })
        }
    },

    show: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id)
            res.status(200).json({
                status: true,
                data: product
            })
        } catch (error) {
            res.status(400).json({ success: false, message: error.message })
        }
    },

    store: async (req, res) => {
        try {
            const product = await Product.create(req.body)
            res.status(201).json({
                status: true,
                data: product,
                message: "Product berhasil ditambahkan"
            })
        } catch (error) {
            res.status(400).json({ success: false, message: error.message })
        }
    },

    update: async (req, res) => {
        try {
            const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.status(200).json({
                status: true,
                data: product,
                message: "Product berhasil diperbarui"
            })
        } catch (error) {
            res.status(400).json({ success: false, message: error.message })
        }
    },

    delete: async (req, res) => {
        try {
            await Product.findByIdAndDelete(req.params.id)
            res.status(200).json({
                status: true,
                message: "Product berhasil dihapus"
            })
        } catch (error) {
            res.status(400).json({ success: false, message: error.message })
        }
    }
}
