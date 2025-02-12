const express = require('express')
const app = express()
const userRouter = require('./router/users')
const productRouter = require('./router/products')
const orderRouter = require('./router/orders')
const connectDB = require('./config/db')
const port = 3000

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Suasana hati saya baik banget.')
})

app.use(userRouter)
app.use(productRouter)
app.use(orderRouter)

connectDB()

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
