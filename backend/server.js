import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'

import products from './data/product.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('APi is running')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/product/:id', (req, res) => {
  const product = products.find((p) => p._id == req.params.id)
  if (product === null) {
    return
  }
  res.json(product)
})

const PORT = process.env.PORT || 6000

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
})
