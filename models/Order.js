const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'shipped', 'delivered'],
        default: 'pending'
    }
})

module.exports = mongoose.model('Order', OrderSchema)
