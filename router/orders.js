const express = require('express')
const router = express.Router()
const orderController = require('../controllers/orders')

router.get('/orders', orderController.index)
router.get('/order/:id', orderController.show)
router.post('/order', orderController.store)
router.put('/order/:id', orderController.update)
router.delete('/order/:id', orderController.delete)

module.exports = router
